import React from "react";
import "./Body.scss";
import Intro from "../Intro";
import Projects from "../Projects";
import Contact from "../Contact";

function Body() {
  return (
    <div id="body-wrapper">
      <div id="inner-body">
        <Intro />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default Body;
