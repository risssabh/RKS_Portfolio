import { useEffect, useState } from "react";

export default function Footer() {
  const [showNavbar, setShowNavbar] = useState(true);

  // Observe when footer is in viewport
  useEffect(() => {
    const footer = document.querySelector("footer");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      },
      { threshold: 0.2 }
    );

    if (footer) observer.observe(footer);

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  // Add / remove class to hide navbar
  useEffect(() => {
    const navbar = document.querySelector(".navbar") as HTMLElement;
    if (navbar) {
      navbar.style.display = showNavbar ? "flex" : "none";
    }
  }, [showNavbar]);

  return (
    <footer className="footer">
      {/* Logo */}
      <a href="#hero" className="footer-logo">
        <span className="logo-r">.R</span>KS
      </a>

      {/* Tagline */}
      <p className="footer-tagline">
        Living, learning, & leveling up one day at a time<span className="bang">...!</span>
      </p>

      {/* Socials */}
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/rishabhkumarsingh361/" target="_blank" rel="noreferrer">
          <img src="/logos/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="https://x.com/itsrissabh" target="_blank" rel="noreferrer">
          <img src="/logos/twitter.svg" alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/ris.sabh/" target="_blank" rel="noreferrer">
          <img src="/logos/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://github.com/risssabh" target="_blank" rel="noreferrer">
          <img src="/logos/github.svg" alt="GitHub" />
        </a>
        <a href="https://discordapp.com/users/598846309901926400" target="_blank" rel="noreferrer">
          <img src="/logos/discord.svg" alt="Discord" />
        </a>
        <a href="mailto:kumarsinghrishabh63@gmail.com">
          <img src="/logos/mail.svg" alt="Mail" />
        </a>
      </div>

      {/* Site Links */}
      <ul className="footer-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="https://hashnode.com/@rissabh" target="_blank" rel="noreferrer">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Credits */}
      <p className="footer-credit">
        Handcrafted by me © 2025 Rishabh Kumar Singh. All rights reserved.
      </p>
    </footer>
  );
}
