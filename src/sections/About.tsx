import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="about flex flex-col lg:flex-row items-center justify-center gap-10 px-6 lg:px-16 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* RIGHT: Content (first on mobile, left on desktop) */}
      <div className="about-content text-center lg:text-left flex-1 order-1 lg:order-1">
        <motion.h2
          className="section-title text-3xl sm:text-4xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="hello-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello There<span className="bang">...!</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          My name is <strong>Rishabh Kumar Singh</strong> and I’m a Computer
          Science graduate from{" "}
          <strong>Delhi Technological University</strong> with a CGPA of 7.3.
          I have a passion for learning and exploring new technologies. I bring
          a strong background in <strong>Frontend Development</strong> and I’m
          improving every day as a full-stack developer. I also achieved an{" "}
          <strong>AIR 1756</strong> (99.85 percentile) in JEE Mains 2020.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          In my free time, I enjoy sipping coffee, watching anime, or playing
          video games. As a dedicated and driven individual, I’m constantly
          seeking opportunities to grow and improve as a programmer.
        </motion.p>

        <motion.p
          className="projects-note"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Thanks for stopping by! Feel free to explore the{" "}
          <a href="#projects" className="link-underline">
            Projects
          </a>{" "}
          I’ve been working on recently. I’d love to connect—whether it’s about
          a project, a potential opportunity, or simply a conversation. Don’t
          hesitate to{" "}
          <a href="#contact" className="link-underline">
            Get in Touch
          </a>
          .
        </motion.p>

        <motion.h3
          className="section-subtitle text-2xl font-semibold mt-10 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Some of the Stack I know
        </motion.h3>

        {/* Skills slider */}
        <div className="skills-slider overflow-hidden">
          <div className="skills-track flex">
            <div className="skill">
              <img src="/logos/react.svg" alt="React" />
              <span>React</span>
            </div>
            <div className="skill">
              <img src="/logos/nodejs.svg" alt="Node.js" />
              <span>Node.js</span>
            </div>
            <div className="skill">
              <img src="/logos/typescript.svg" alt="TypeScript" />
              <span>TypeScript</span>
            </div>
            <div className="skill">
              <img src="/logos/javascript.svg" alt="JavaScript" />
              <span>JavaScript</span>
            </div>
            <div className="skill">
              <img src="/logos/html.svg" alt="HTML5" />
              <span>HTML5</span>
            </div>
            {/* ... keep rest of your skills unchanged */}
          </div>
        </div>
      </div>

      {/* LEFT: GIF (moves below text on mobile/tablet) */}
      <motion.div
        className="about-media flex justify-center order-2 lg:order-2"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <img
          src="/images/soft.gif"
          alt="Animated coding gif"
          className="about-gif max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm w-full rounded-2xl"
        />
      </motion.div>
    </motion.section>
  );
}
