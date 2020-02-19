import { NextPage } from "next";

import { Formula } from "../components/blades/Formula";
import { Positioning } from "../components/blades/Positioning";
import { Skills } from "../components/blades/Skills";
import { Work } from "../components/blades/Work";
import { Content } from "../components/blades/Content";

const Index: NextPage<{}> = () => (
  <>
    <Positioning />
    <Formula />
    <Skills />
    <Work />
    <Content />
  </>
);

export default Index;
