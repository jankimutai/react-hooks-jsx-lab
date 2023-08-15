import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    About
    <h2>About Me</h2>
    <p>Every module can have two different types of export, named export and default export.</p>
    <img src={image} alt="I made this"></img>

  </div>);
}

export default About;
