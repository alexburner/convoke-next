import React from "react";
import { RichText } from "prismic-reactjs";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { ContentItemData, ContentItem } from "../ContentItem";

interface Blade {
  title: unknown;
  content_set: { content: ContentItemData }[];
}

const GET_BLADE = gql`
  query {
    allBladeContents {
      edges {
        node {
          title
          content_set {
            content {
              ... on Content {
                title
                image_url
                link_url
              }
            }
          }
        }
      }
    }
  }
`;

const extractBlade = (data: any): Blade | undefined =>
  data?.allBladeContents?.edges?.[0]?.node;

export const Content: React.SFC = () => {
  const { loading, error, data } = useQuery(GET_BLADE);

  if (loading) {
    return (
      <section className="content-x section">
        <div className="container has-text-centered">
          <div className="fa-3x">
            <i className="fas fa-circle-notch fa-spin"></i>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="content-x section">
        <div className="container has-text-centered">
          <h4>Error!</h4>
          <pre>{error.message}</pre>
        </div>
      </section>
    );
  }

  const blade = extractBlade(data);

  if (!blade) {
    return (
      <section className="content-x section">
        <div className="container has-text-centered">
          <h4>Error! Malformed data</h4>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </section>
    );
  }

  return (
    <section className="content-x section">
      <div className="container">
        <div className="title is-3">{RichText.asText(blade.title)}</div>
        <div className="columns is-mobile is-multiline">
          {blade.content_set.map(({ content }) => (
            <div key={content.link_url || ""} className="column is-half-mobile">
              <ContentItem data={content} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
