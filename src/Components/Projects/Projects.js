import React from 'react'
import './Projects.css'
import project from '../../Img/ecommerce-example.jpg'

const Projects = () => {
  return (
    <div className="section-projects">
        <h3> My Works </h3>
      <div className="grid-projects">
        <img src={project}  alt="project" />
        <img src={project}  alt="project" />
        <img src={project}  alt="project" />
        <img src={project}  alt="project" />
        <img src={project}  alt="project" />
        <img src={project}  alt="project" />
      </div>
    </div>
  )
}

export default Projects