import React from "react";
import "./About.css";

import comic_strip from "../../assets/comic_strip.png";

function About() {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <img
          alt="comic-strip"
          className="about-comic-strip"
          src={comic_strip}
        />
      </div>
    </div>
  );
}

export default About;
