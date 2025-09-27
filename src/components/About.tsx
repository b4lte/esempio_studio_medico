import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="about reveal" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-media">
          <img
            src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team medico"
            onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
          />
        </div>
        <div className="about-text">
          <h2 id="about-title">Chi siamo</h2>
          <p>
            Studio Medico San Marco è composto da medici specialisti con anni di esperienza. Crediamo in un approccio
            umano, basato sull’ascolto e sull’eccellenza clinica.
          </p>
          <ul>
            <li>Personale specializzato</li>
            <li>Referti rapidi e digitali</li>
            <li>Approccio multidisciplinare</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
