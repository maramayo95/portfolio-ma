import React from 'react'
import './Projects.css'
import project from '../../Img/ecommerce-example.jpg'

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-projects">
          <h3> Projects </h3>
        <div className="grid-projects">
          <img src={project}  alt="project" />
          <img src={project}  alt="project" />
          <img src={project}  alt="project" />
          <img src={project}  alt="project" />
          <img src={project}  alt="project" />
          <img src={project}  alt="project" />
        </div>
      </div>
    </section>
  )
}

export default Projects