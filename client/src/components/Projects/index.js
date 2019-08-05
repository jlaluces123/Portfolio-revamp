import React from 'react';
import "./projects.css";

// Component Imports
import Project from "../Project/index.js";

const Projects = (props) => {
  return (
    <div className = "project__list">
      <ul className = "list">
        {props.projects.map(project => (
          <Project key = {project.title} project = {project} />
        ))}
      </ul>
    </div>
  );
}

export default Projects;