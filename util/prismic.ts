import { PrismicLink } from "apollo-link-prismic";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import gql from "graphql-tag";

export const client = new ApolloClient({
  link: PrismicLink({ uri: "https://convoke.prismic.io/graphql" }),
  cache: new InMemoryCache(),
});

export interface Subpage {
  title: unknown;
  body: unknown;
}

export const getSubpageQuery = (uid: string) =>
  gql`
    query {
      subpage(uid:"${uid}", lang:"en-us"){
        title
        body
      }
    }
  `;

export const extractSubpage = (data: any): Subpage | undefined => data?.subpage;

export interface Metadata {
  title: string | null;
  description: string | null;
  image_url: string | null;
}

export const getMetadata = async (): Promise<Metadata | undefined> => {
  const response = await client.query({
    query: gql`
      query {
        allMetadatas {
          edges {
            node {
              title
              description
              image_url
            }
          }
        }
      }
    `,
  });
  const metadata = response?.data?.allMetadatas?.edges?.[0]?.node;
  if (metadata) {
    return {
      title: metadata.title,
      description: metadata.description,
      image_url: metadata.image_url,
    };
  }
};
