import React from "react";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import "../styles.css";

import { pageview } from "../lib/gtag";

Router.events.on("routeChangeComplete", url => pageview(url));

export default class CustomApp extends App {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Convoke | Seattle's Gaming & Esports Marketing Agency</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
