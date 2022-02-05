import React from "react";
import logo from '../assets/rug-logo-2.png'
import project from "../assets/project.png"


export default function ProjectCard() {

  const vettedProjects = [{projectName:"Project Name Here", rating:93.5},{projectName:"Project Name Here", rating:93.5},{projectName:"Project Name Here", rating:93.5},{projectName:"Project Name Here", rating:93.5},{projectName:"Project Name Here", rating:93.5},{projectName:"Project Name Here", rating:93.5},{projectName:"Project Name Here", rating:93.5}]
  
  return (
    <div className="landingRow5">
      <div className="projectCards">
        <div className="projectCard">
          <div><img src={project} height="80" width="80"></img></div>
          <div>Project Name Goes Here</div>
          <div>93.5</div>
        </div>
        <div className="projectCard">
          <div><img src={project} height="80" width="80"></img></div>
          <div>Project Name Goes Here</div>
          <div>93.5</div>
        </div>
        <div className="projectCard">
          <div><img src={project} height="80" width="80"></img></div>
          <div>Project Name Goes Here</div>
          <div>93.5</div>
        </div>
        <div className="projectCard">
          <div><img src={project} height="80" width="80"></img></div>
          <div>Project Name Goes Here</div>
          <div>93.5</div>
        </div>
        <div className="projectCard">
          <div><img src={project} height="80" width="80"></img></div>
          <div>Project Name Goes Here</div>
          <div>93.5</div>
        </div>
        <div className="projectCard">
          <div><img src={project} height="80" width="80"></img></div>
          <div>Project Name Goes Here</div>
          <div>93.5</div>
        </div>
      </div>
    </div>
  );
}