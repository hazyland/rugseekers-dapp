import React from "react";
import logo from '../assets/rug-logo-2.png'
import project from "../assets/project.png"


export default function ProjectCard() {
  let projectIMG = project

  const vettedProjects = [{projectName:"Project Name Here", rating:93.5},{projectName:"Project Name Here", rating:93.5},{projectName:"Project Name Here", rating:93.5},{projectName:"Project Name Here", rating:93.5},{projectName:"Project Name Here", rating:93.5},{projectName:"Project Name Here", rating:93.5},{projectName:"Project Name Here", rating:93.5}]
  

  function vettedProjectsMap(project : any) {

    return (
      <div className="projectCard">
        <div>
          <img src={projectIMG} height="80" width="80"></img>
        </div>
        <div>{project.projectName}</div>
        <div className="score">{project.rating}</div>
      </div>
    );
  }



  return (
    <div className="landingRow6">
      {vettedProjects.map(vettedProjectsMap)}
    </div>
  );
}