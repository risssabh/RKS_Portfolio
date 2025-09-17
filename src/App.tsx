import React, { useEffect, useState } from "react";
import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Startup from "./sections/Startup";

const App: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const startup = document.getElementById("startup");

    if (!startup) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // hide navbar while startup is visible
        if (entry.isIntersecting) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(startup);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      {/* Startup section */}
      <section id="startup">
        <Startup />
      </section>

      {/* Navbar appears only after Startup */}
      <Navbar className={showNavbar ? "show" : ""} />

      <main>
        <section id="hero" className="section container">
          <Hero />
        </section>
        <section id="about" className="section container">
          <About />
        </section>
        <section id="projects" className="section container">
          <Projects />
        </section>
        <section id="contact" className="section container">
          <Contact />
        </section>
      </main>

      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
