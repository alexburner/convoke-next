import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { RichText } from "prismic-reactjs";

interface Blade {
  title: unknown;
  subtitle: string | null;
  caption: string | null;
  background_image_url: string | null;
}

const GET_BLADE = gql`
  query {
    allBladePositionings {
      edges {
        node {
          title
          subtitle
          caption
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
            filter: "grayscale(100%)",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        ></div>
      )}
      <div className="container">
        <img
          className="logo"
          src="https://i.imgur.com/aXdnZnn.png"
          alt="convoke"
        />
        <div className="title is-1 is-spaced">
          {RichText.asText(blade.title)}
        </div>
        {blade.subtitle && (
          <div className="subtitle is-4">{blade.subtitle}</div>
        )}
        {blade.caption && <p>{blade.caption}</p>}
      </div>
    </section>
  );
};
