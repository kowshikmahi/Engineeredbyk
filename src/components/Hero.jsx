import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";
import { personalInfo, stats } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="eyebrow">HELLO, I’M KOWSHIK 👋</p>

        <h1 className="hero-title">
          {personalInfo.name}
          <br />
          <span className="gradient-text">{personalInfo.title}</span>
        </h1>

        <p className="hero-subtitle">{personalInfo.subtitle}</p>

        <div className="hero-buttons">
          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            <FaDownload /> Resume
          </a>

          <a href="#projects" className="secondary-btn">
            View Projects
          </a>
        </div>

        <div className="social-row">
          <a href={personalInfo.github} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href={personalInfo.instagram} target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>

        <div className="stats-grid">
          {stats.map((item, index) => (
            <div key={index} className="stat-card glass">
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-image-wrap">
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>

          <div className="hero-card glass">
            <img
              src={personalInfo.image}
              alt={personalInfo.name}
              className="hero-image"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}