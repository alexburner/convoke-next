import { NextPage } from "next";
import { RichText } from "prismic-reactjs";
import { useQuery } from "@apollo/react-hooks";
import { ReactNode } from "react";

import { extractSubpage, getSubpageQuery } from "../util/prismic";

const Work: NextPage = () => {
  const { loading, error, data } = useQuery(getSubpageQuery("content"));

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
      <div className="container">{content}</div>
    </section>
  );
};

export default Work;
