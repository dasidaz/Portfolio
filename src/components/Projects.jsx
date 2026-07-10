import React from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="section-projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;