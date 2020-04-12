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
