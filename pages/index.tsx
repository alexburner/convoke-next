import React from "react";
import { NextPageContext } from "next";

interface Props {
  userAgent?: string;
}

export default class IndexPage extends React.Component<Props> {
  static async getInitialProps({ req }: NextPageContext) {
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    return { userAgent };
  }

  render() {
    const { userAgent } = this.props;
    return (
      <div>
        <h1>Your user agent: {userAgent}</h1>
      </div>
    );
  }
}
