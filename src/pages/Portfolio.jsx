import React from 'react';
import Project from '../components/Project';
import project1Image from '../assets/MikeKrucePhoto.jpg';
import project2Image from '../assets/NoteTakerPhoto.png'

const projects = [
  { 
    title: 'Project 1',
    imageUrl: project1Image,
    deployedUrl: 'https://mikekrucephoto.net/',
    repoUrl: 'https://github.com/MikeKruce/mikekrucephoto'
   },

  { title: 'Project 2',
    imageUrl: project2Image,
    deployedUrl: 'https://mikekruce.github.io/express-js-challenge-note-taker/',
    repoUrl: 'https://github.com/MikeKruce/express-js-challenge-note-taker' },
  
];

const Portfolio = () => (
  <main className="main-portfolio">
    <section className="portfolio">
      <h2>Project Examples</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  </main>
);

export default Portfolio;
