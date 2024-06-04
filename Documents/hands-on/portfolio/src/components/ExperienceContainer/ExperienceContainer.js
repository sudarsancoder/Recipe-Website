import React from "react";
import { Element } from "react-scroll";
import Experience from "../ExperienceBox/Experience";
 import "./ExperienceContainer.css";
const ExperienceContainer = () => {
  return (
    <Element className="experiencecontainer" id="exp">

      <h1>Experience</h1>
      <div className="experiencecontainer__info">
        <Experience number="5+" title="demo projects" />
        <Experience number="4+" title="certifications" style={{backgroundColor: "#f64c08"}} />
        <Experience number="3months" title="internship" />
        <Experience number="1+ years" title="experience" />
      </div>

    </Element>
  );
};

export default ExperienceContainer;
