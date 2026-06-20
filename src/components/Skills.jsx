import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-tag">SKILLS</p>
        <h2>My tech stack and tools</h2>
      </motion.div>

      <div className="skills-grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              className="skill-card glass tilt-card"
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ rotateX: 8, rotateY: -8, y: -8 }}
            >
              <Icon className="skill-icon" />
              <p>{skill.name}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}