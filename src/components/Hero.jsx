import { motion } from "framer-motion";
import { personalInfo, stats } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="eyebrow">MECHATRONICS • WEB DEVELOPMENT • INNOVATION</p>

        <h1 className="hero-title">
          Hi, I’m <span className="gradient-text">{personalInfo.name}</span>
          <br />
          {personalInfo.role}
        </h1>

        <p className="hero-subtitle">{personalInfo.bio}</p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>
          <a href={personalInfo.resume} target="_blank" rel="noreferrer" className="secondary-btn">
            Download Resume
          </a>
        </div>

        <div className="social-row">
          {personalInfo.socials?.github && (
            <a href={personalInfo.socials.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {personalInfo.socials?.linkedin && (
            <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
          {personalInfo.socials?.email && (
            <a href={`mailto:${personalInfo.socials.email}`}>
              Email
            </a>
          )}
        </div>

        <div className="stats-grid">
          {stats.map((item, index) => (
            <div className="stat-card glass" key={index}>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="hero-image-wrap">
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>

          <div className="hero-card glass">
            {/* IMPORTANT: image comes from public folder */}
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