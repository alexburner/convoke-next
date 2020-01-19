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
        <section className="skills section">
          <div className="column is-4">
            <p className="title is-3">
              <span className="fa-stack fa-2x">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fas fa-crosshairs fa-stack-1x"></i>
              </span>
            </p>
          </div>
        </section>
      </div>
    );
  }
}
