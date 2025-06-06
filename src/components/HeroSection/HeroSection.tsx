import React from 'react';
import './HeroSection.css';

interface HeroSectionProps {
  onScrollToAbout: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToAbout }) => {
  return (
    <section className="hero-section">
      <div className="hero-bg">
        {/* Imagen ilustrativa: persona paraguaya preocupada por dinero (puedes cambiar el src por una imagen real más adelante) */}
        <img className="hero-img" src="https://i.pinimg.com/736x/0e/94/cf/0e94cfafa332dcb29c144fa89161dca0.jpg" alt="Imagen de fondo: inspiración financiera paraguaya" />
      </div>
      <div className="hero-content">
        <h1><strong>Todos nos preocupamos por la plata...<br/>pero pocos hablamos de ella.</strong></h1>
        <div className="hero-buttons">
          <button className="scroll-btn" onClick={onScrollToAbout}>Aprender sobre dinero</button>
          <a className="login-btn" href="https://finanzas-bafv-gustavo-abels-projects.vercel.app/login" target="_blank" rel="noopener noreferrer">Registrar ingresos y egresos</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
