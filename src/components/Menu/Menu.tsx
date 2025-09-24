import React from 'react';
import './Menu.css';

const Menu: React.FC = () => {
  const toggleMenu = () => {
    const menu = document.getElementById('menuModal');
    menu?.classList.toggle('active');
    
    if (menu?.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const handleMenuClick = (sectionId: string) => {
    toggleMenu();
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="menu-modal" id="menuModal">
      <button 
        className="close-btn" 
        onClick={toggleMenu} 
        aria-label="Close menu"
      >
        &times;
      </button>
      <a href="#about" onClick={() => handleMenuClick('about')}>
        About
      </a>
      <a href="#tech_tools" onClick={() => handleMenuClick('tech_tools')}>
        Tech & Tools
      </a>
      <a href="#favorites_interests" onClick={() => handleMenuClick('favorites_interests')}>
        Favorites & Interests
      </a>
    </div>
  );
};

export default Menu;