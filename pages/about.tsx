import { NextPage } from "next";
import { RichText } from "prismic-reactjs";

import { getPage, Page } from "../util/prismic";

const About: NextPage<{ page: Page }> = ({ page }) => {
  console.log(page.body);
  const html = RichText.render(page.body);
  console.log(html);
  return <>{html}</>;
};

About.getInitialProps = async () => {
  const page = await getPage("about");
  if (!page) throw new Error("Couldn't find about page");
  return { page };
};

export default About;
