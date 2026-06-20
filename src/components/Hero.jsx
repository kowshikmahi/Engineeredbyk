import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";
import { personalInfo, stats } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="hero section">
      <div className="hero-left">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          MECHATRONICS ENGINEER • FULL STACK WEB DEVELOPER
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          Hi, I’m <span className="gradient-text">Kowshik</span> —
          <br />
          I build websites, systems, and ideas that actually move.
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {personalInfo.subtitle}
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
        >
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            <FaDownload />
            Resume
          </a>
        </motion.div>

        <motion.div
          className="social-row"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a href={personalInfo.github} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href={personalInfo.instagram} target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </motion.div>

        <motion.div
          className="stats-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {stats.map((item, index) => (
            <div className="stat-card glass" key={index}>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9 }}
      >
        <div className="hero-image-wrap">
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
          <div className="hero-card glass">
            <img src={personalInfo.image} alt="Kowshik" className="hero-image" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}