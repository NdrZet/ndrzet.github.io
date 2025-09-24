import React from 'react';
import './TechTools.css';

const TechTools: React.FC = () => {
  const techItems = [
    'HTML', 'CSS', 'Tailwind', 'JS, ES7', 'shadcn/ui', 'Java', 'Python', 'C++',
    'Rust', 'Next.js', 'React.js', 'Prettier', 'Git', 'Figma', 'Illustrator',
    'Adobe XD', 'Photoshop', 'Clip Studio', 'DaVinci Resolve', 'Fusion 20'
  ];

  return (
    <section id="tech_tools">
      <h2>Tech & Tools</h2>
      <div className="tech-grid">
        {techItems.map((tech, index) => (
          <div key={index} className="tech-item" style={{ animationDelay: `${index * 0.05 + 0.1}s` }}>
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechTools;