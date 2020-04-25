import React from "react";
import App from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import { ApolloProvider } from "@apollo/react-hooks";

import "../style/style.css";
import "../style/nprogress.css";

import { pageview } from "../util/gtag";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { client } from "../util/prismic";
import { Contact } from "../components/Contact";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeError", () => NProgress.done());
Router.events.on("routeChangeComplete", (url) => {
  NProgress.done();
  pageview(url);
});

export default class CustomApp extends App {
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Navbar />
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
        <Contact />
        <Footer />
      </>
    );
  }
}
