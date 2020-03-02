import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { RichText } from "prismic-reactjs";

interface Blade {
  title: unknown;
  skill_set: {
    title: unknown;
    description: unknown;
    font_awesome_icon: string | null;
  }[];
}

const GET_BLADE = gql`
  query {
    allBladeSkillss {
      edges {
        node {
          title
          skill_set {
            title
            description
            font_awesome_icon
          }
        }
      }
    }
  }
`;

const extractBlade = (data: any): Blade | undefined =>
  data?.allBladeSkillss?.edges?.[0]?.node;

export const Skills: React.SFC = () => {
  const { loading, error, data } = useQuery(GET_BLADE);

  if (loading) {
    return (
      <section className="skills section">
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
      <section className="skills section">
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
      <section className="skills section">
        <div className="container has-text-centered">
          <h4>Error! Malformed data</h4>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </section>
    );
  }

  return (
    <section className="skills section">
      <div className="container">
        <div className="title is-3">{RichText.asText(blade.title)}</div>
        <div className="columns">
          {blade.skill_set.map(skill => (
            <div
              key={skill.font_awesome_icon || ""}
              className="column has-text-centered"
            >
              <p className="title is-4">
                <span className="fa-stack fa-3x">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i
                    className={`fas fa-${skill.font_awesome_icon} fa-stack-1x`}
                  ></i>
                </span>
              </p>
              <div className="title is-4 is-spaced">
                {RichText.asText(skill.title)}
              </div>
              <div className="subtitle is-6">
                <RichText render={skill.description || []} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
