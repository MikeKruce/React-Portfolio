import React from 'react';
import myPhoto from '../assets/my-photo.png';

const AboutMe = () => (
  <main className="main-aboutme">
  <section className="about-me">
    <img src={myPhoto} alt="Mike" />
    <p>Hi, I'm Mike. I am a dedicated professional making a significant career transition from running a successful photography business to becoming a full stack web developer. With a keen eye for detail and a passion for creativity, I combine my artistic skills with a growing expertise in web development. My journey from capturing moments behind the lens to crafting dynamic websites demonstrates my adaptability and commitment to continuous learning and growth in the tech industry.</p>
  </section>
  </main>
);

export default AboutMe;
