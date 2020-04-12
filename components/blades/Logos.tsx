import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { RichText } from "prismic-reactjs";

interface Blade {
  title: unknown;
  description: unknown;
  logos: { image_url: string | null }[];
}

const GET_BLADE = gql`
  query {
    allBladeLogoss {
      edges {
        node {
          title
          description
          logos {
            image_url
          }
        }
      }
    }
  }
`;

const extractBlade = (data: any): Blade | undefined =>
  data?.allBladeLogoss?.edges?.[0]?.node;

export const Logos: React.SFC = () => {
  const { loading, error, data } = useQuery(GET_BLADE);

  if (loading) {
    return (
      <section className="logos section">
        <div className="container has-text-centered">
          <div className="fa-3x">
            <i className="fas fa-circle-notch fa-spin"></i>
          </div>
        </div>
      </section>
    );
    ``;
  }

  if (error) {
    return (
      <section className="logos section">
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
      <section className="logos section">
        <div className="container has-text-centered">
          <h4>Error! Malformed data</h4>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </section>
    );
  }

  return (
    <section className="logos section">
      <div className="container">
        <div className="title is-3">{RichText.asText(blade.title)}</div>
        {blade.description && (
          <div className="content">
            <RichText render={blade.description} />
          </div>
        )}
        <div className="columns is-mobile is-multiline is-centered">
          {blade.logos.map((logo) => (
            <div
              key={logo.image_url || ""}
              className="column is-4-mobile is-3-tablet is-2-widescreen"
            >
              <figure className="image">
                <img src={logo.image_url || ""} />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
