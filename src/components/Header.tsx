import React from "react";

const Header: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    const header = document.querySelector(".header") as HTMLElement | null;
    const offset = header ? header.offsetHeight + 12 : 20;
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header className="header" role="banner">
      <div className="container header-inner">
        <div className="logo" aria-hidden>
          <img
            src="https://images.unsplash.com/vector-1738925788298-e3bce2bc05b1?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="logo-img"
            onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
          />
          <span className="brand">Studio Medico</span>
        </div>

        <nav aria-label="Menu principale">
          <ul className="nav-links">
            <li><a href="#hero" onClick={handleNavClick}>Home</a></li>
            <li><a href="#services" onClick={handleNavClick}>Servizi</a></li>
            <li><a href="#about" onClick={handleNavClick}>Chi siamo</a></li>
            <li><a href="#contact" onClick={handleNavClick}>Contatti</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
