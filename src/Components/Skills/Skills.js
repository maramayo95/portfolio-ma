import React from "react";
import "./Skills.css";
import { FaJs, FaCss3Alt, FaHtml5, FaReact, FaBootstrap } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

const Skills = () => {
  return (
      <>
      <h3 className="h3Skills">Skills & Tools </h3>
    <section className="section-skills">
        
      <div className="grid-skill-icons">
        <div className="grid-skill-icon">
          <a>
            <FaHtml5 className="skill-icon html" />
            <p>Html</p>
          </a>
        </div>

        <div className="grid-skill-icon">
          <a>
            <FaCss3Alt className="skill-icon  css3" />
            <p>Css</p>
          </a>
        </div>

        <div className="grid-skill-icon">
          <a>
            <FaJs className="skill-icon js" />
            <p>Javascript</p>
          </a>
        </div>

        <div className="grid-skill-icon">
          <a>
            <FaReact className="skill-icon react" />
            <p>React</p>
          </a>
        </div>

        <div className="grid-skill-icon ">
          <a>
            <FaBootstrap className="skill-icon bs" />
            <p>Bootstrap</p>
          </a>
        </div>

        <div className="grid-skill-icon ">
          <a>
            <SiFirebase className="skill-icon fireb" />
            <p>Firebase</p>
          </a>
        </div>
      </div>
    </section>
      </>
  );
};

export default Skills;
