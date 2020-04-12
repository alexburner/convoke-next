import Head from "next/head";

import { Metadata } from "../util/prismic";

export const PageHead: React.SFC<{
  metadata: Metadata;
  name?: string;
}> = ({ metadata, name }) => {
  const title = name ? `${name} — ${metadata.title}` : metadata.title || "";
  const description = metadata.description || "";
  const image_url = metadata.image_url || "";
  return (
    <Head>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://convoke.gg/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image_url} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://convoke.gg/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta name="twitter:image" content={image_url} />
    </Head>
  );
};
