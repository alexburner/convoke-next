import { NextPage, GetStaticProps } from "next";

import { Formula } from "../components/blades/Formula";
import { Positioning } from "../components/blades/Positioning";
import { Skills } from "../components/blades/Skills";
import { Work } from "../components/blades/Work";
import { Content } from "../components/blades/Content";
import { Logos } from "../components/blades/Logos";
import { Metadata, getMetadata } from "../util/prismic";
import { PageHead } from "../components/PageHead";
import { Partnership } from "../components/blades/Partnership";

const Index: NextPage<{ metadata: Metadata }> = ({ metadata }) => (
  <>
    <PageHead metadata={metadata} />
    <Positioning />
    <Formula />
    <Skills />
    <Logos />
    <Partnership />
    <Work />
    <Content />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const metadata = await getMetadata();
  if (!metadata) throw new Error("Couldn't find metadata");
  return { props: { metadata } };
};

export default Index;
