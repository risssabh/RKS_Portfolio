import { motion } from "framer-motion";

const projects = [
  {
    title: "Digital Quill",
    description:
    "Digital Quill is a blogging platform built with the MERN stack. It allows users to create, read, and manage blogs with features like authentication, likes, comments, search, notification and edit or delete blogs.",
    image: "/images/Digital-Quill.png",
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    visit: "https://digital-quills.vercel.app/",
    github: "https://github.com/risssabh/digital-quills",
    recommended: true,
  },
  {
    title: "Books Archives",
    description:
"Books Archives is a responsive and online library web app built with React, Vite, and Redux Toolkit. It showcases a catalog of 100+ books across genres and more complete with categories, search, filters, and detailed views.",    
    image: "/images/books-archives.png",
    stack: ["React.js", "Redux Toolkit", "Node.js", "MongoDB", "Tailwind CSS"],
    visit: "https://books-archives.vercel.app/",
    github: "https://github.com/risssabh/BooksArchives",
  },
  {
    title: "ShoppyGlobe",
    description:
    "ShoppyGlobe is a fully functional e-commerce web app built with Vite. It features category filtering, search, product details with reviews, a shopping cart with quantity adjustments, and smooth navigation via React Router.",
    image: "/images/soppyglobe.png",
    stack: ["React.js", "Redux Toolkit", "Express.js", "MongoDB", "Tailwind CSS"],
    visit: "https://github.com/risssabh/ShoppyGlobe",
    github: "https://github.com/risssabh/ShoppyGlobe",
  },
  {
    title: "MEETyour",
    description:
    "MEETyour is a real-time communication platform with multi-client voice/video calling, instant chat and screen sharing. It’s designed for seamless collaboration, supporting up to 150–200 concurrent users.",
    image: "/images/meetyour.png",
    stack: ["Java Script", "WebRTC", "Socket.io", "Node.js", "Express.js"],
    visit: "https://risssabh.github.io/meetyour/",
    github: "https://github.com/risssabh/meetyour",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="projects-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Section Heading */}
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        My Projects
      </motion.h2>

      {/* Subheading */}
      <p className="projects-subheading">
        Here you will find some of the Projects I have been working on recently
        <span className="bang">...!</span>
      </p>

      {/* Project Cards */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className={`project-card ${project.recommended ? "with-ribbon" : ""}`}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            {/* Project Image */}
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            {/* Title + Description */}
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            {/* Stack */}
            <h4 className="stack-title">Stack Used</h4>
            <ul className="stack-list">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="project-buttons">
              <motion.a
                href={project.visit}
                target="_blank"
                rel="noreferrer"
                className="project-btn visit"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(204,46,93,0.8)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Visit
              </motion.a>

              <motion.a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-btn github"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(204,46,93,0.8)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src="/logos/github.svg"
                  alt="GitHub"
                  className="github-icon"
                />
                GitHub
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* More Projects Button */}
      <motion.a
        href="https://github.com/risssabh?tab=repositories"
        target="_blank"
        rel="noreferrer"
        className="project-btn visit more-projects-btn"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 20px rgba(204,46,93,0.8)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        More Projects →
      </motion.a>
    </motion.section>
  );
}
