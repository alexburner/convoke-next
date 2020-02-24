import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { RichText } from "prismic-reactjs";

interface Blade {
  title: unknown;
  stages: {
    image_url: string | null;
    alt_text: string | null;
  }[];
}

const GET_BLADE = gql`
  query {
    allBladeFormulas {
      edges {
        node {
          title
          stages {
            image_url
            alt_text
          }
        }
      }
    }
  }
`;

const extractBlade = (data: any): Blade | undefined =>
  data?.allBladeFormulas?.edges?.[0]?.node;

export const Formula: React.SFC = () => {
  const { loading, error, data } = useQuery(GET_BLADE);

  if (loading) {
    return (
      <section className="formula section">
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
      <section className="formula section">
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
      <section className="formula section">
        <div className="container has-text-centered">
          <h4>Error! Malformed data</h4>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </section>
    );
  }

  return (
    <section className="formula section">
      <div className="container">
        <div className="title is-3">{RichText.asText(blade.title)}</div>
        <div className="columns">
          {blade.stages.map(stage => (
            <div key={stage.image_url || ""} className="column">
              <figure className="image">
                <img src={stage.image_url || ""} alt={stage.alt_text || ""} />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
