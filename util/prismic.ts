import { PrismicLink } from "apollo-link-prismic";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import gql from "graphql-tag";

export interface Subpage {
  title: unknown;
  body: unknown;
}

export const client = new ApolloClient({
  link: PrismicLink({ uri: "https://convoke.prismic.io/graphql" }),
  cache: new InMemoryCache(),
});

export const getSubpage = async (uid: string): Promise<Subpage | undefined> => {
  const response = await client.query({
    query: gql`
      query {
        subpage(uid:"${uid}", lang:"en-us"){
          title
          body
        }
      }
    `,
  });
  const subpage = response?.data?.subpage;
  if (subpage) {
    return {
      title: subpage.title,
      body: subpage.body,
    };
  }
};
