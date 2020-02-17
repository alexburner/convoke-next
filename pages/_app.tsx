import React, { useState } from "react";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import Link from "next/link";
import NProgress from "nprogress";

import "../style/main.css";
import "../style/nprogress.css";

import { pageview } from "../util/gtag";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeError", () => NProgress.done());
Router.events.on("routeChangeComplete", url => {
  NProgress.done();
  pageview(url);
});

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
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
        </Link>
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
          <Link href="/">
            <a className="navbar-item" href="/">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="navbar-item" href="/about">
              About
            </a>
          </Link>
          <Link href="/work">
            <a className="navbar-item" href="/work">
              Work
            </a>
          </Link>
          <Link href="/content">
            <a className="navbar-item" href="/content">
              Content
            </a>
          </Link>
          <a className="navbar-item" onClick={scrollToFooter}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.SFC = () => (
  <footer className="contact">
    <div className="container" id="footer">
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

const scrollToFooter = () => {
  document.querySelector("#footer")?.scrollIntoView({ behavior: "smooth" });
};
