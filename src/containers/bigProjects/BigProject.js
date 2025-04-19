// src/containers/BigProjects/BigProject.js
import React from "react";
import "./BigProject.scss";
import { bigProjects } from "../../portfolio";
import infosysPoster from "../../assets/images/infosysofficial.png";


const BigProject = () => {
  if (!bigProjects.display) return null;

  return (
    <section className="big-projects">
      <h1 className="project-title">{bigProjects.title}</h1>
      <p className="project-subtitle">{bigProjects.subtitle}</p>

      {bigProjects.projects.map((project, index) => (
        <div className="project-card" key={index}>
          {/* Poster */}
          {project.image && (
            <div className="project-poster-wrapper">
            <img
              className="project-poster"
              src={infosysPoster}
              alt="Project Poster"
            />
          </div>
          
          )}

          {/* Title */}
          <h2>{project.projectName}</h2>

          {/* Short Description */}
          <p className="project-desc">{project.projectDesc}</p>

          {/* Video Embed */}
          {project.video && (
            <div className="project-video-wrapper">
              <iframe
                src={project.video.replace("youtu.be", "www.youtube.com/embed")}
                title={`${project.projectName} Video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

          {/* Full Write-up */}
          {project.writeUp && (
            <pre className="project-writeup">{project.writeUp}</pre>
          )}

          {/* Footer Links */}
          <div className="project-links">
            {project.footerLink &&
              project.footerLink.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  className="project-link-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default BigProject;
