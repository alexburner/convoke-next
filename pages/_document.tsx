import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "../util/gtag";

export default class extends Document {
  render() {
    return (
      <html>
        <Head>
          {/* Mobile size & bar colors */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=0.9"
          />
          <meta name="theme-color" content="#111" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />

          {/* Favicon */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />

          {/* Basic description */}
          <meta
            name="description"
            content="Leveraging a unique approach to strategy, we combine the rigor of a traditional marketing consultancy with deep subject matter expertise in tech and gaming."
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://convoke.gg/" />
          <meta
            property="og:title"
            content="Convoke | Marketing Powered By Nerdiness"
          />
          <meta
            property="og:description"
            content="Leveraging a unique approach to strategy, we combine the rigor of a traditional marketing consultancy with deep subject matter expertise in tech and gaming."
          />
          <meta property="og:image" content="https://i.imgur.com/5GRfmUJ.png" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://convoke.gg/" />
          <meta
            property="twitter:title"
            content="Convoke | Marketing Powered By Nerdiness"
          />
          <meta
            property="twitter:description"
            content="Leveraging a unique approach to strategy, we combine the rigor of a traditional marketing consultancy with deep subject matter expertise in tech and gaming."
          />
          <meta
            name="twitter:image"
            content="https://i.imgur.com/5GRfmUJ.png"
          />

          {/* Google Web Fonts */}
          <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `WebFont.load({ google: { families: ["Montserrat"] } });`
            }}
          />

          {/* Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
            `
            }}
          />

          {/* Bulma */}
          <link
            rel="stylesheet"
            type="text/css"
            media="screen"
            href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css"
          />
          <link
            rel="stylesheet"
            type="application/octet-stream"
            media="screen"
            href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.css.map"
          />

          {/* Font Awesome */}
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css"
            integrity="sha384-QokYePQSOwpBDuhlHOsX0ymF6R/vLk/UQVz3WHa6wygxI5oGTmDTv8wahFOSspdm"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/regular.css"
            integrity="sha384-FKw7x8fCxuvzBwOJmhTJJsKzBl8dnN9e2R4+pXRfYoHivikuHkzWyhKWDSMcGNK8"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/fontawesome.css"
            integrity="sha384-vd1e11sR28tEK9YANUtpIOdjGW14pS87bUBuOIoBILVWLFnS+MCX9T6MMf0VdPGq"
            crossOrigin="anonymous"
          />

          {/* Flickity */}
          <link
            rel="stylesheet"
            href="https://unpkg.com/flickity@2/dist/flickity.min.css"
          />

          {/* Smooth Scroll polyfill */}
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/iamdustan-smoothscroll/0.4.0/smoothscroll.min.js"
            integrity="sha256-IylDNWjip7FK2TJUYck237qBTBeSiwnSFDCjLG686D4="
            crossOrigin="anonymous"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
