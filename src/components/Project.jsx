import React from 'react';

const Project = ({ title, imageUrl, deployedUrl, repoUrl }) => (
  <div className="project">
    <img src={imageUrl} alt={`${title} screenshot`} />
    <h3>{title}</h3>
    <div className="project-links">
      <a href={deployedUrl} target="_blank" rel="noopener noreferrer">Site Link</a>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">GitHub Link</a>
    </div>
  </div>
);

export default Project;
