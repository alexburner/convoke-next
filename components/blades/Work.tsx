import React from "react";
import { RichText } from "prismic-reactjs";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { WorkItemData, WorkItem } from "../WorkItem";

interface Blade {
  title: unknown;
  works: { work_item: WorkItemData }[];
}

const GET_BLADE = gql`
  query {
    allBladeWorks {
      edges {
        node {
          title
          works {
            work_item {
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
        <div className="work-items">
          {blade.works?.map(({ work_item }) => (
            <WorkItem key={RichText.asText(work_item.title)} data={work_item} />
          ))}
        </div>
      </div>
    </section>
  );
};
