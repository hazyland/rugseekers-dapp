import React from "react";
import logo from '../assets/rug-logo-2.png'
import project from "../assets/project.png"


export default function ProjectCard() {

  const vettedProjects = [{projectName:"Project Name Here", rating:93.5},{projectName:"Project Name Here", rating:93.5},{projectName:"Project Name Here", rating:93.5},{projectName:"Project Name Here", rating:93.5},{projectName:"Project Name Here", rating:93.5},{projectName:"Project Name Here", rating:93.5},{projectName:"Project Name Here", rating:93.5}]
  

  function vettedProjectsMap() {

    return (
      <div className="projectCard">
        <div>
          <img src={project} height="80" width="80"></img>
        </div>
        <div>Project Name Goes Here</div>
        <div className="score">93.5</div>
      </div>
    );
  }



  return (
    <div className="landingRow6">
      {vettedProjects.map(vettedProjectsMap)}
    </div>
  );
}