import React from 'react';
import './CTASection.css';

const CTASection: React.FC = () => {
  return (
    <section className="cta-section">
      <h2>Let's Work Together</h2>
      <a 
        className="cta-btn" 
        href="https://github.com/ZeFair-Network" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Soon
      </a>
    </section>
  );
};

export default CTASection;