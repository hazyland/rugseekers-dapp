import React, { useEffect, useState } from "react";
import logo from '../assets/rug-logo-2.png'
import project from "../assets/project.png"


export default function ProjectCard() {
  let projectIMG = project
  const [vet, setvet] = useState([])
  const [settings, setSettings] = useState({
    green: 90,
    orange: 80,
    red: 70
  })
  // const vettedProjects = [{projectName:"Project Name Here", rating:93.5},{projectName:"Project Name Here", rating:93.5},{projectName:"Project Name Here", rating:93.5},{projectName:"Project Name Here", rating:93.5},{projectName:"Project Name Here", rating:93.5},{projectName:"Project Name Here", rating:93.5},{projectName:"Project Name Here", rating:93.5}]
  

  async function getProjects() {
    const res = await fetch('/vetted.json')
    const vetted = await res.json();
    setvet(vetted.projects)
    setSettings({
      green: vetted.green,
      orange: vetted.orange,
      red: vetted.red
    })
    console.log(vetted)
  }
  useEffect(() => {
    getProjects()
  }, [])
  function vettedProjectsMap(project : any) {
    let scoreColor = "red"
    if (project.rating > settings.green) {
      scoreColor = "green"
    } else if(project.rating > settings.orange) {
      scoreColor = "orange"
    } else if(project.rating > settings.red) {
      scoreColor = "tomato"
    } 
    return (
      <div className="projectCard">
        <div>
          <img src={project.image} height="80" width="80"></img>
        </div>
        <div>{project.projectName}</div>
        <div className="score" 
        style={{
          background: scoreColor
        }}
        >{project.rating}</div>
      </div>
    );
  }



  return (
    <div className="landingRow6">
      {vet.map(vettedProjectsMap)}
    </div>
  );
}