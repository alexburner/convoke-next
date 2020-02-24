import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { RichText } from "prismic-reactjs";

interface Blade {
  title: unknown;
  body: unknown;
  background_image_url: string | null;
}

const GET_BLADE = gql`
  query {
    allBladePositionings {
      edges {
        node {
          title
          body
          background_image_url
        }
      }
    }
  }
`;

const extractBlade = (data: any): Blade | undefined =>
  data?.allBladePositionings?.edges?.[0]?.node;

export const Positioning: React.SFC = () => {
  const { loading, error, data } = useQuery(GET_BLADE);

  if (loading) {
    return (
      <section className="positioning section">
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
      <section className="positioning section">
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
      <section className="positioning section">
        <div className="container has-text-centered">
          <h4>Error! Malformed data</h4>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </section>
    );
  }

  return (
    <section className="positioning section">
      {blade.background_image_url && (
        <div
          style={{
            background: `url(${blade.background_image_url}) no-repeat center bottom`,
            backgroundSize: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        ></div>
      )}
      <div className="container has-text-right">
        <div className="title is-2">{RichText.asText(blade.title)}</div>
        <div className="columns">
          <div className="column is-8 is-offset-4">
            <RichText render={blade.body || []} />
          </div>
        </div>
      </div>
    </section>
  );
};
