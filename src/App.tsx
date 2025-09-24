import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header/Header';
import About from './components/About/About';
import TechTools from './components/TechTools/TechTools';
import Interests from './components/Interests/Interests';
import CTASection from './components/CTASection/CTASection';
import Menu from './components/Menu/Menu';
import './styles/globals.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main>
          <About />
          <TechTools />
          <Interests />
          <CTASection />
        </main>
        <Menu />
      </div>
    </ThemeProvider>
  );
};

export default App;