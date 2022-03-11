import React from "react";
import "./Skills.css";
import { FaJs, FaCss3Alt, FaHtml5, FaReact, FaBootstrap } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <section className="section-skills" id="skills">
          <h3 className="h3Skills">Skills & Tools </h3>
        <section className="section-skills">
          <div className="grid-skill-icons">
            <div className="grid-skill-icon">
              <FaHtml5 className="skill-icon html" />
              <p>Html</p>
            </div>

            <div className="grid-skill-icon">
              <FaCss3Alt className="skill-icon  css3" />
              <p>Css</p>
            </div>

            <div className="grid-skill-icon">
              <FaJs className="skill-icon js" />
              <p>Javascript</p>
            </div>

            <div className="grid-skill-icon">
              <FaReact className="skill-icon react" />
              <p>React</p>
            </div>

            <div className="grid-skill-icon ">
              <FaBootstrap className="skill-icon bs" />
              <p>Bootstrap</p>
            </div>

            <div className="grid-skill-icon ">
              <SiFirebase className="skill-icon fireb" />
              <p>Firebase</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Skills;
