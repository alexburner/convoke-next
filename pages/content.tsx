import { NextPage } from "next";
import { RichText } from "prismic-reactjs";

import { getSubpage, Subpage } from "../util/prismic";

const Content: NextPage<{ page: Subpage }> = ({ page }) => (
  <section className="section subpage">
    <div className="container content">
      <RichText render={page.body || []} />
    </div>
  </section>
);

Content.getInitialProps = async () => {
  const page = await getSubpage("content");
  if (!page) throw new Error("Couldn't find content page");
  return { page };
};

export default Content;
