import React from "react";

const Services: React.FC = () => {
  const services = [
    { title: "Medicina Generale", desc: "Visite, prevenzione e gestione patologie croniche." },
    { title: "Pediatria", desc: "Cura e prevenzione per i più piccoli." },
    { title: "Cardiologia", desc: "Visite cardiologiche ed esami." },
    { title: "Diagnostica", desc: "Ecografie, analisi di laboratorio e referti rapidi." },
  ];

  return (
    <section id="services" className="services reveal" aria-labelledby="services-title">
      <div className="container">
        <h2 id="services-title">I nostri servizi</h2>
        <p className="section-intro">Offriamo un ampio range di prestazioni con professionisti esperti.</p>
        <div className="services-grid">
          {services.map((s) => (
            <article key={s.title} className="service-card" tabIndex={0}>
              <div className="service-card-inner">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
