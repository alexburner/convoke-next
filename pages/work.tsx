import { NextPage } from "next";
import { RichText } from "prismic-reactjs";

import { getSubpage, Subpage } from "../util/prismic";

const Work: NextPage<{ page: Subpage }> = ({ page }) => (
  <section className="section subpage">
    <div className="container content">
      <RichText render={page.body || []} />
    </div>
  </section>
);

Work.getInitialProps = async () => {
  const page = await getSubpage("work");
  if (!page) throw new Error("Couldn't find work page");
  return { page };
};

export default Work;
