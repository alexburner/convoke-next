import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { RichText } from "prismic-reactjs";

interface TeamData {
  title: string | null;
  description: string | null;
  team_members: {
    image_url: string;
    name: string;
    role: string;
  }[];
}

const GET_TEAM = gql`
  query {
    allTeams {
      edges {
        node {
          title
          description
          team_members {
            image_url
            name
            role
          }
        }
      }
    }
  }
`;

const extractTeam = (data: any): TeamData | undefined =>
  data?.allTeams?.edges?.[0]?.node;

export const Team: React.SFC<{}> = () => {
  const { loading, error, data } = useQuery(GET_TEAM);

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

  const team = extractTeam(data);

  if (!team) {
    return (
      <div className="has-text-centered">
        <h4>Error! Malformed data</h4>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }

  return (
    <div className="team">
      {team.title && (
        <div className="title is-3">{RichText.asText(team.title)}</div>
      )}
      {team.description && <RichText render={team.description} />}
      <div className="columns is-variable is-8">
        {team.team_members?.map((member) => (
          <div key={member.name || ""} className="column">
            <figure className="image">
              <img className="is-rounded" src={member.image_url || ""} />
            </figure>
            <p>&nbsp;</p>
            <p className="has-text-weight-semibold">{member.name}</p>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
