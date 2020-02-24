import { NextPage } from "next";
import { RichText } from "prismic-reactjs";

import { getSubpage, Subpage } from "../util/prismic";

const About: NextPage<{ page: Subpage }> = ({ page }) => (
  <section className="section subpage">
    <div className="container content">
      <RichText render={page.body || []} />
    </div>
  </section>
);

About.getInitialProps = async () => {
  const page = await getSubpage("about");
  if (!page) throw new Error("Couldn't find about page");
  return { page };
};

export default About;
