import React, { useEffect, useState } from "react";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 900 && open) setOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  useEffect(() => {
    function handleLinkClick() {
      setOpen(false);
    }
    const links = document.querySelectorAll(".mobile-menu a");
    links.forEach((l) => l.addEventListener("click", handleLinkClick));
    return () =>
      links.forEach((l) => l.removeEventListener("click", handleLinkClick));
  }, []);

  return (
    <nav
      className={`navbar ${className || ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar-container container">
        {/* Logo */}
        <a href="#hero" className="logo" aria-label="home">
          <span className="logo-r">.R</span>KS
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#projects">My Projects</a>
          </li>
          <li>
            <a href="#contact">Say Hello</a>
          </li>
        </ul>

        {/* Resume button (hidden on mobile by CSS) */}
        <a
          href="https://drive.google.com/file/d/1dF38u7i95tfyc-eJBXitKJ60VR88ncFf/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="resume-btn desktop-only"
        >
          Download CV
        </a>

        {/* Hamburger */}
        <button
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
          aria-expanded={open}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`mobile-menu ${open ? "open" : ""}`}
        aria-hidden={!open}
      >
        <ul>
          <li>
            <a href="#about" onClick={() => setOpen(false)}>
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setOpen(false)}>
              My Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpen(false)}>
              Say Hello
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/your-google-drive-id/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="resume-btn"
              onClick={() => setOpen(false)}
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
