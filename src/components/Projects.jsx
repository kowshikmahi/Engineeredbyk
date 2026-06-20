import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-tag">PROJECTS</p>
        <h2>Things I’ve built across web, robotics and engineering</h2>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`project-card glass ${project.accent}`}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -12, rotateX: 5, rotateY: -5 }}
            transition={{ duration: 0.4 }}
          >
            <span className="project-tag">{project.tag}</span>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}