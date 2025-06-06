import React from 'react';
import './AboutSection.css';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <h2>Anotá lo que entra, controlá lo que sale</h2>
      <p className="about-desc">
        Este sistema fue desarrollado para ayudarte a llevar un control real de tus ingresos y egresos. Permite registrar lo que ganás y lo que gastás día a día, ver cuánto entra, cuánto sale y cuánto queda disponible. Está pensado para quienes cobran por día, por semana o por mes, y buscan una forma simple de organizar su plata sin fórmulas complicadas ni estructuras rígidas.
      </p>
      <div className="mini-posts">
        <article className="mini-post">
  <div className="mini-post-icon" aria-label="presupuesto">
  {/* Wallet SVG 3D */}
  <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="walletBody" x1="6" y1="14" x2="42" y2="38" gradientUnits="userSpaceOnUse">
        <stop stop-color="#B24592"/>
        <stop offset="1" stop-color="#8B1D5A"/>
      </linearGradient>
      <linearGradient id="walletInner" x1="10" y1="18" x2="38" y2="34" gradientUnits="userSpaceOnUse">
        <stop stop-color="#fff"/>
        <stop offset="1" stop-color="#f7e9f3"/>
      </linearGradient>
      <filter id="walletShadow" x="0" y="14" width="48" height="28" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="4" stdDeviation="3" flood-color="#33082a33"/>
      </filter>
    </defs>
    <rect x="6" y="14" width="36" height="24" rx="6" fill="url(#walletBody)" filter="url(#walletShadow)"/>
    <rect x="10" y="18" width="28" height="16" rx="4" fill="url(#walletInner)"/>
    <ellipse cx="36" cy="26" rx="3" ry="3" fill="#B24592"/>
    <ellipse cx="36" cy="26" rx="1.3" ry="1.3" fill="#fff" opacity="0.7"/>
  </svg>
</div>
  <h3>¿Qué es un presupuesto mensual y cómo empiezo?</h3>
  <p>Un presupuesto mensual te ayuda a saber adónde se va tu plata. ¿Cómo empezar?</p>
  <ul>
    <li>Anotá todo lo que ganás y gastás en el mes.</li>
    <li>Poné un límite a cada categoría: comida, pasaje, cuentas, ahorro.</li>
    <li>Al final del mes, revisá cómo te fue y ajustá lo que necesites.</li>
  </ul>
</article>
        <article className="mini-post">
  <div className="mini-post-icon" aria-label="registro">
  {/* Checklist SVG 3D */}
  <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="checklistBody" x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse">
        <stop stop-color="#B24592"/>
        <stop offset="1" stop-color="#8B1D5A"/>
      </linearGradient>
      <linearGradient id="checklistLine" x1="14" y1="16" x2="34" y2="19" gradientUnits="userSpaceOnUse">
        <stop stop-color="#fff"/>
        <stop offset="1" stop-color="#f7e9f3"/>
      </linearGradient>
      <filter id="checklistShadow" x="0" y="10" width="48" height="38" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="4" stdDeviation="3" flood-color="#33082a33"/>
      </filter>
    </defs>
    <rect x="10" y="10" width="28" height="28" rx="6" fill="url(#checklistBody)" filter="url(#checklistShadow)"/>
    <rect x="14" y="16" width="20" height="3" rx="1.5" fill="url(#checklistLine)"/>
    <rect x="14" y="23" width="20" height="3" rx="1.5" fill="url(#checklistLine)"/>
    <rect x="14" y="30" width="14" height="3" rx="1.5" fill="url(#checklistLine)"/>
    <ellipse cx="20" cy="17.5" rx="1.5" ry="1.5" fill="#fff" opacity="0.85"/>
    <ellipse cx="20" cy="24.5" rx="1.5" ry="1.5" fill="#fff" opacity="0.85"/>
    <ellipse cx="20" cy="31.5" rx="1.5" ry="1.5" fill="#fff" opacity="0.85"/>
  </svg>
</div>
  <h3>La importancia de registrar tus gastos</h3>
  <p>Si no sabés en qué se va tu plata, es difícil mejorar. ¿Qué hacer?</p>
  <ul>
    <li>Anotá cada gasto, aunque sea chico.</li>
    <li>Usá una libreta, una app o lo que te quede cómodo.</li>
    <li>Sumá a fin de mes y mirá en qué gastaste más.</li>
  </ul>
</article>
        <article className="mini-post">
  <div className="mini-post-icon" aria-label="organización diaria">
  {/* Calendar SVG 3D */}
  <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="calendarBody" x1="8" y1="12" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stop-color="#B24592"/>
        <stop offset="1" stop-color="#8B1D5A"/>
      </linearGradient>
      <linearGradient id="calendarInner" x1="12" y1="18" x2="36" y2="34" gradientUnits="userSpaceOnUse">
        <stop stop-color="#fff"/>
        <stop offset="1" stop-color="#f7e9f3"/>
      </linearGradient>
      <filter id="calendarShadow" x="0" y="12" width="48" height="34" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="4" stdDeviation="3" flood-color="#33082a33"/>
      </filter>
    </defs>
    <rect x="8" y="12" width="32" height="28" rx="6" fill="url(#calendarBody)" filter="url(#calendarShadow)"/>
    <rect x="12" y="18" width="24" height="16" rx="4" fill="url(#calendarInner)"/>
    <rect x="12" y="24" width="24" height="2" rx="1" fill="#8B1D5A" opacity="0.7"/>
    <rect x="12" y="30" width="24" height="2" rx="1" fill="#8B1D5A" opacity="0.7"/>
    <ellipse cx="16" cy="20" rx="1.5" ry="1.5" fill="#B24592"/>
    <ellipse cx="20" cy="20" rx="1.5" ry="1.5" fill="#B24592"/>
    <ellipse cx="24" cy="20" rx="1.5" ry="1.5" fill="#B24592"/>
  </svg>
</div>
  <h3>¿Cómo organizo mi plata si gano por día?</h3>
  <p>Si cobrás por día o por semana, la clave es separar apenas recibís la plata:</p>
  <ul>
    <li>Dividí en partes: comida, cuentas, ahorro (aunque sea poco).</li>
    <li>No esperes a ver si sobra: decidí antes de gastar.</li>
    <li>Usá sobres, cajas o apps para separar.</li>
  </ul>
</article>
      </div>
    </section>
  );
};

export default AboutSection;
