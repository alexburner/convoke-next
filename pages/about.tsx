import { NextPage } from "next";
import { RichText } from "prismic-reactjs";

import { getPage, Page } from "../util/prismic";

const About: NextPage<{ page: Page }> = ({ page }) => (
  <RichText render={page.body || []} />
);

About.getInitialProps = async () => {
  const page = await getPage("about");
  if (!page) throw new Error("Couldn't find about page");
  return { page };
};

export default About;
