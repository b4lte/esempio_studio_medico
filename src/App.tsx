import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  useEffect(() => {
    // Reveal on scroll
    const elems = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.15 }
    );
    elems.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    // Highlight nav link for section in view
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-links a"));

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (!id) return;
          links.forEach((a) => {
            a.classList.toggle("active", a.getAttribute("href") === `#${id}` && entry.isIntersecting);
          });
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
