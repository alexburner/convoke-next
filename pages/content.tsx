import { NextPage } from "next";
import { RichText } from "prismic-reactjs";

import { getPage, Page } from "../util/prismic";

const Content: NextPage<{ page: Page }> = ({ page }) => (
  <RichText render={page.body} />
);

Content.getInitialProps = async () => {
  const page = await getPage("content");
  if (!page) throw new Error("Couldn't find content page");
  return { page };
};

export default Content;
