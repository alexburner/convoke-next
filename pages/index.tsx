import { NextPage } from "next";

import { Formula } from "../components/blades/Formula";
import { Positioning } from "../components/blades/Positioning";
import { Skills } from "../components/blades/Skills";
import { Work } from "../components/blades/Work";
import { Content } from "../components/blades/Content";
import { Logos } from "../components/blades/Logos";

const Index: NextPage<{}> = () => (
  <>
    <Positioning />
    <Formula />
    <Skills />
    <Logos />
    <Work />
    <Content />
  </>
);

export default Index;
