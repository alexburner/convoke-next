import { NextPage } from "next";

import { Brand } from "../components/blades/Brand";
import { About } from "../components/blades/About";
import { Skills } from "../components/blades/Skills";
import { Work } from "../components/blades/Work";
import { Content } from "../components/blades/Content";

const Index: NextPage<{}> = () => (
  <>
    <Brand />
    <About />
    <Skills />
    <Work />
    <Content />
  </>
);

export default Index;
