import React from "react";

import { Brand } from "../components/home/Brand";
import { About } from "../components/home/About";
import { Skills } from "../components/home/Skills";
import { Work } from "../components/home/Work";
import { Articles } from "../components/home/Articles";
import { Contact } from "../components/home/Contact";

export default class IndexPage extends React.Component<{}> {
  render() {
    return (
      <>
        <Brand />
        <About />
        <Skills />
        <Work />
        <Articles />
        <Contact />
      </>
    );
  }
}
