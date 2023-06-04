import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
 const project = projects.map(one =>{
  return <ProjectItem key={one.id} name={one.name} about={one.about} technologies={one.technologies}/>
 })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {project}
      </div>
    </div>
  );
}

export default ProjectList;
