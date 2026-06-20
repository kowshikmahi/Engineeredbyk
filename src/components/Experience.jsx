import { motion } from "framer-motion";
import { experiences } from "../data/portfolioData";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-tag">EXPERIENCE & ACHIEVEMENTS</p>
        <h2>Internships, industrial exposure and milestones</h2>
      </motion.div>

      <div className="timeline">
        {experiences.map((item, index) => (
          <motion.div
            className="timeline-item glass"
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot"></div>
            <h3>{item.title}</h3>
            <span>{item.date}</span>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}