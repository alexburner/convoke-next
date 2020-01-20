import React, { useState } from "react";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import "../styles.css";

import { pageview } from "../util/gtag";

Router.events.on("routeChangeComplete", url => pageview(url));

export default class CustomApp extends App {
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Convoke | Seattle's Gaming & Esports Marketing Agency</title>
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
    );
  }
}

const Navbar: React.SFC = () => {
  const [isActive, setActive] = useState(false);
  console.log("isActive", isActive);
  console.log("setActive", setActive);
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </a>
        <a
          role="button"
          className={"navbar-burger" + (isActive ? " is-active" : "")}
          aria-label="menu"
          aria-expanded="false"
          onClick={() => setActive(!isActive)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarId"
        className={"navbar-menu" + (isActive ? " is-active" : "")}
      >
        <div className="navbar-end">
          <a className="navbar-item" href="/">
            Home
          </a>
          <a className="navbar-item" href="/">
            About
          </a>
          <a className="navbar-item" href="/">
            Work
          </a>
          <a className="navbar-item" href="/">
            Content
          </a>
          <a className="navbar-item" href="/">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.SFC = () => (
  <footer>
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-8">
          <div className="title is-3">Send an email</div>
          <form action="https://formspree.io/gary@convoke.gg" method="POST">
            <div className="field is-grouped">
              <div className="control is-expanded has-icons-left">
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Your name"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </div>
              <div className="control is-expanded has-icons-left">
                <input
                  className="input"
                  type="email"
                  name="_replyto"
                  placeholder="Email address"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <textarea
                  className="textarea"
                  name="message"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <input
                  className="button is-danger"
                  type="submit"
                  value="Send"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </footer>
);
