import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { RichText } from "prismic-reactjs";

interface Blade {
  title: unknown;
  description: unknown;
  button_text: string | null;
  image_url: string | null;
}

const GET_BLADE = gql`
  query {
    allBladePartnerships {
      edges {
        node {
          title
          description
          button_text
          image_url
        }
      }
    }
  }
`;

const extractBlade = (data: any): Blade | undefined =>
  data?.allBladePartnerships?.edges?.[0]?.node;

export const Partnership: React.SFC = () => {
  const { loading, error, data } = useQuery(GET_BLADE);

  if (loading) {
    return (
      <section className="partnership section">
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
      <section className="partnership section">
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
      <section className="partnership section">
        <div className="container has-text-centered">
          <h4>Error! Malformed data</h4>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </section>
    );
  }

  return (
    <section className="partnership section">
      <div className="container">
        <div className="columns is-variable is-6 is-vcentered">
          <div className="column">
            <img src={blade.image_url || ""} />
          </div>
          <div className="column">
            <div className="title is-3">{RichText.asText(blade.title)}</div>
            <p>{RichText.asText(blade.description)}</p>
            <a
              className="button is-success"
              href="https://catchyagency.com/"
              title="Catchy - Full Service Developer Marketing Agency"
              target="_blank"
            >
              {blade.button_text}
            </a>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    </section>
  );
};
