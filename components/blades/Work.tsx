import React from "react";
import { RichText } from "prismic-reactjs";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { WorkItemData, WorkItem } from "../WorkItem";

interface Blade {
  title: unknown;
  work: WorkItemData;
}

const GET_BLADE = gql`
  query {
    allBladeWorks {
      edges {
        node {
          title
          work {
            ... on Work {
              title
              description
              media {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const extractBlade = (data: any): Blade | undefined =>
  data?.allBladeWorks?.edges?.[0]?.node;

export const Work: React.SFC = () => {
  const { loading, error, data } = useQuery(GET_BLADE);

  if (loading) {
    return (
      <section className="work section">
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
      <section className="work section">
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
      <section className="work section">
        <div className="container has-text-centered">
          <h4>Error! Malformed data</h4>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </section>
    );
  }

  return (
    <section className="work section">
      <div className="container">
        <div className="title is-3">{RichText.asText(blade.title)}</div>
        <WorkItem data={blade.work} />
      </div>
    </section>
  );
};
