import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero reveal" aria-label="Sezione principale">
      <div className="hero-overlay" />
      <div className="hero-content container">
        <h1>Studio Medico San Marco</h1>
        <p className="lead">Professionalità, esperienza e attenzione alla tua salute.</p>
        <div className="hero-cta">
          <a className="btn-primary" href="#contact">Prenota una visita</a>
          <a className="btn-outline" href="#about">Chi siamo</a>
        </div>
        <ul className="hero-features" aria-hidden>
          <li>Specialisti certificati</li>
          <li>Referti rapidi</li>
          <li>Approccio personalizzato</li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
