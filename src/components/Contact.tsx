import React, { useState } from "react";

type FormState = { name: string; email: string; phone?: string; message: string; };

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Inserisci il nome";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Email non valida";
    if (form.message.trim().length < 10) e.message = "Messaggio troppo breve";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const change = (k: keyof FormState) => (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [k]: ev.target.value });
    setErrors({ ...errors, [k]: undefined });
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSending(true);
    setSuccess(null);

    // Simulazione invio (qui puoi integrare EmailJS o il tuo backend)
    setTimeout(() => {
      setSending(false);
      setSuccess("Messaggio inviato! Ti ricontatteremo a breve.");
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="contact reveal" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="contact-form-wrap">
          <h2 id="contact-title">Contattaci</h2>
          <p>Compila il form per informazioni o prenotazioni.</p>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <label>
              <span className="label">Nome</span>
              <input value={form.name} onChange={change("name")} type="text" />
              {errors.name && <small className="error">{errors.name}</small>}
            </label>

            <label>
              <span className="label">Email</span>
              <input value={form.email} onChange={change("email")} type="email" />
              {errors.email && <small className="error">{errors.email}</small>}
            </label>

            <label>
              <span className="label">Telefono (opzionale)</span>
              <input value={form.phone} onChange={change("phone")} type="text" />
            </label>

            <label>
              <span className="label">Messaggio</span>
              <textarea value={form.message} onChange={change("message")} rows={6} />
              {errors.message && <small className="error">{errors.message}</small>}
            </label>

            <div className="form-actions">
              <button className="btn-primary" type="submit" disabled={sending}>
                {sending ? "Invio..." : "Invia messaggio"}
              </button>
              <button type="button" className="btn-outline" onClick={() => { setForm({ name: "", email: "", phone: "", message: "" }); setErrors({}); setSuccess(null); }}>
                Annulla
              </button>
            </div>

            {success && <div className="form-success" role="status">{success}</div>}
          </form>
        </div>

        <aside className="contact-info" aria-label="Informazioni di contatto">
          <h3>Indirizzo</h3>
          <p>Via Monte Napoleone 10, 20121 Milano (esempio)</p>
          <h3>Orari</h3>
          <p>Lun - Ven: 09:00 - 18:00<br/>Sab: 09:00 - 13:00</p>

          <div className="map">
            <iframe
              title="Mappa Studio Medico"
              src="https://www.google.com/maps?q=Via+Monte+Napoleone+10+Milano&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>
      </div>

      <div className="contact-legal container">
        <p>Informativa privacy e trattamento dati — i dati inviati verranno usati solo per rispondere alla tua richiesta.</p>
      </div>
    </section>
  );
};

export default Contact;
