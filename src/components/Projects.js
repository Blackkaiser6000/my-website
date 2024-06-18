import React from 'react';
import './Projects.css';
import project1 from '../images/SFSWSA.png';

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <img src={project1} alt="Project 1" />
          <h3>Student Feedback System with Sentimental Analysis</h3>
          <p>A Student Feedback with machine learning capabilities that can identify if the feedback is Positive, Negative, or Neutral</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
