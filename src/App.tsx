import React, { useRef } from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <HeroSection onScrollToAbout={handleScrollToAbout} />
      {/* El ref se pasa al section de AboutSection mediante id para scroll suave */}
      <div ref={aboutRef} id="about-anchor">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default App;
