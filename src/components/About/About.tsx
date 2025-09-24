import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about">
      <h1 className="manrope-font">Karim Sokolov</h1>
      <p className="highlight">
        I'm a creative developer and Web designer from Saint Petersburg, Russia. I am engaged in website layout and application development.
      </p>
      <p>
        I believe in creating interactive, understandable, and responsive experiences. I enjoy using my skills to inspire people to achieve their goals.
      </p>
      <p>
        My development stack is focused on performance and accessibility, as well as pleasant interaction.
      </p>
      <p>Services I offer include:</p>
      <ul>
        <li>UI/UX Design</li>
        <li>Front end web development</li>
        <li>Front and back application development</li>
      </ul>
    </section>
  );
};

export default About;