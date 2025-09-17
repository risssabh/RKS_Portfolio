import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/Button";

const roles = ["Full-Stack Developer", "Front-End Developer", "API Builder"];
const roleInterval = 2800; // ms

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % roles.length),
      roleInterval
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" className="hero-grid">
      {/* LEFT SIDE */}
      <div className="hero-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            color: "#9aa0a6",
            marginBottom: 8,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div style={{ fontSize: 28 }}>
            Hello<span className="bang">!</span> I am
          </div>
        </motion.div>

        <motion.h1
          className="hero-name"
          title="Rishabh Kumar Singh"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          Rishabh Kumar Singh
        </motion.h1>

        <div className="hero-role" aria-live="polite">
          <span style={{ fontWeight: 700, marginRight: 6 }}>I am a</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="role-highlight"
              style={{ display: "inline-block", fontWeight: 700 }}
            >
              {roles[index]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          style={{ marginTop: 18 }}
        >
          For more about me, check out{" "}
          <a href="#about" className="inline-link">
            About Me
          </a>
          . You can also explore{" "}
          <a href="#projects" className="inline-link">
            My Projects
          </a>{" "}
          and see what I’ve built.
        </motion.p>

        <motion.div
          style={{
            marginTop: 22,
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
          href="https://drive.google.com/file/d/1dF38u7i95tfyc-eJBXitKJ60VR88ncFf/view?usp=sharing"
          target="_blank"
            rel="noreferrer"
          >
            <Button variant="primary">Download CV</Button>
          </a>

          <a href="#contact">
            <Button variant="ghost">Contact Me</Button>
          </a>
        </motion.div>
      </div>

      {/* RIGHT SIDE */}
      <motion.div
        className="hero-right"
        aria-hidden="false"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
<div className="neon-frame neon-ring floating">
  <img
    src="/images/avatar-animated.png"
    alt="Animated avatar"
    className="hero-avatar"
    onMouseEnter={(e) => (e.currentTarget.src = "/images/headshot.png")}
    onMouseLeave={(e) => (e.currentTarget.src = "/images/avatar-animated.png")}
  />
</div>

      </motion.div>
    </section>
  );
}
