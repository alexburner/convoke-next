import { PrismicLink } from "apollo-link-prismic";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import gql from "graphql-tag";

export interface Page {
  title: any;
  body: any;
}

export const client = new ApolloClient({
  link: PrismicLink({ uri: "https://convoke.prismic.io/graphql" }),
  cache: new InMemoryCache()
});

export const getPage = async (uid: string): Promise<Page | undefined> => {
  const response = await client.query({
    query: gql`
      query {
        allPages(uid: "${uid}") {
          edges {
            node {
              title
              body
            }
          }
        }
      }
    `
  });
  const page = response?.data?.allPages?.edges?.[0]?.node;
  if (page) {
    return {
      title: page.title,
      body: page.body
    };
  }
};
