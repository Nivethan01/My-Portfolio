import React from 'react';
import './project.css';
import projects from "../../assets/my_project";

const Project = () => {
  return (
    <div id='projects' className="projects">
      <div className="mywork-title">
        <h1>My Projects</h1>
      </div>
      <div className="mywork-container">
        {projects.map((project, index) => (
          project.p_link ? (
            <a key={index} href={project.p_link} target="_blank" rel="noopener noreferrer">
              <img src={project.p_img} alt={project.p_name} />
            </a>
          ) : (
            <img key={index} src={project.p_img} alt={project.p_name} />
          )
        ))}
      </div>
    </div>
  );
}

export default Project;
