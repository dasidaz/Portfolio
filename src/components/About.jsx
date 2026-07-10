import React from 'react';
import { personalInfo } from '../data/portfolioData';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="section-about">
      <div className="container">
        <h1>Hello, I'm <span className="highlight">{personalInfo.name}</span></h1>
        <h2>{personalInfo.role}</h2>
        <p>{personalInfo.description}</p>
      </div>
    </section>
  );
};

export default About;