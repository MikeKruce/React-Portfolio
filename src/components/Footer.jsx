import React from 'react';
import { FaGithub, FaLinkedin, } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div className="footer-info">
      <p>Mike Kruce</p>
      <p>Full Stack Developer</p>
    </div>
    <div className="footer-icons">
      <a href="https://github.com/MikeKruce"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/Mike-Kruce"><FaLinkedin /></a>
     </div>
  </footer>
);

export default Footer;
