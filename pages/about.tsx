import { NextPage, GetStaticProps } from "next";
import { RichText } from "prismic-reactjs";
import { useQuery } from "@apollo/react-hooks";
import { ReactNode } from "react";

import {
  extractSubpage,
  getSubpageQuery,
  getMetadata,
  Metadata,
} from "../util/prismic";
import { PageHead } from "../components/PageHead";
import { Team } from "../components/Team";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const getStaticProps: GetStaticProps = async () => {
  const metadata = await getMetadata();
  if (!metadata) throw new Error("Couldn't find metadata");
  return { props: { metadata } };
};

const About: NextPage<{ metadata: Metadata }> = ({ metadata }) => {
  const { loading, error, data } = useQuery(getSubpageQuery("about"));

  let content: ReactNode = null;

  if (loading) {
    content = (
      <div className="has-text-centered">
        <div className="fa-3x">
          <i className="fas fa-circle-notch fa-spin"></i>
        </div>
      </div>
    );
  } else if (error) {
    content = (
      <div className="has-text-centered">
        <h4>Error!</h4>
        <pre>{error.message}</pre>
      </div>
    );
  } else {
    const page = extractSubpage(data);
    content = (
      <div className="content">
        {page?.title && (
          <div className="title is-1">{RichText.asText(page.title)}</div>
        )}
        {page?.body && <RichText render={page.body} />}
      </div>
    );
  }

  return (
    <section className="section subpage">
      <PageHead metadata={metadata} name="About" />
      <div className="container">
        <Breadcrumbs
          crumbs={[
            { text: "Home", href: "/" },
            { text: "About", href: "/about" },
          ]}
        />
        {content}
        <p>&nbsp;</p>
        <Team />
      </div>
    </section>
  );
};

export default About;
