import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Studio Medico San Marco — Tutti i diritti riservati.</p>
        <nav aria-label="Footer">
          <a href="#hero">Home</a>
          <a href="#services">Servizi</a>
          <a href="#contact">Contatti</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
