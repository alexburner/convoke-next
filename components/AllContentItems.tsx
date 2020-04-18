import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { ContentItemData, ContentItem } from "./ContentItem";

const GET_CONTENT_ITEMS = gql`
  query {
    allContents {
      edges {
        node {
          title
          image_url
          link_url
          date
          type
        }
      }
    }
  }
`;

const extractItems = (data: any): ContentItemData[] | undefined =>
  data?.allContents?.edges?.map((edge: any) => edge.node);

export const AllContentItems: React.SFC<{}> = () => {
  const { loading, error, data } = useQuery(GET_CONTENT_ITEMS);

  if (loading) {
    return (
      <div className="has-text-centered">
        <div className="fa-3x">
          <i className="fas fa-circle-notch fa-spin"></i>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="has-text-centered">
        <h4>Error!</h4>
        <pre>{error.message}</pre>
      </div>
    );
  }

  const items = extractItems(data);
  return (
    <div className="columns is-mobile is-multiline is-centered">
      {items?.map((contentItem) => (
        <div
          key={contentItem.link_url}
          className="column is-half-mobile is-half-tablet is-one-third-desktop is-one-third-widescreen is-one-quarter-fullhd"
        >
          <ContentItem data={contentItem} />
        </div>
      ))}
    </div>
  );
};
