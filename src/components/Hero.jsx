import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-grid">
        {/* LEFT CONTENT */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <span className="hero-badge">⚡ ENGINEEREDBYK // SYSTEM ONLINE</span>

          <h1 className="hero-title">
            Hi, I’m <span>{personalInfo.name}</span>
          </h1>

          <h2 className="hero-subtitle">
            Mechatronics Engineer • Full Stack Developer • Builder of cool things
          </h2>

          <p className="hero-description">
            <span className="hero-highlight">Part engineer. Part developer. Part cinematic chaos.</span>
            <br />
            I build digital experiences with <strong>Stark’s innovation</strong>,
            <strong> Batman’s precision</strong>, <strong>Spider-Man’s agility</strong>,
            and <strong> Tyler Durden’s refusal to be ordinary</strong>.
          </p>

          <div className="hero-quote-strip">
            <span>🦇 Batman Focus</span>
            <span>🤖 Stark Innovation</span>
            <span>🕷 Spider Reflex</span>
            <span>🔥 Mayhem Energy</span>
          </div>

          <div className="hero-actions">
            <a href={personalInfo.resume} target="_blank" rel="noreferrer" className="btn btn-primary">
              <FaDownload /> Resume
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Projects
            </a>
          </div>

          <div className="hero-socials">
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
        </motion.div>

        {/* RIGHT 3D CARD */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-orbit orbit-1"></div>
          <div className="hero-orbit orbit-2"></div>
          <div className="hero-orbit orbit-3"></div>

          <motion.div
            className="hero-card-3d"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ rotateY: 8, rotateX: 8, scale: 1.03 }}
          >
            <div className="hero-image-frame">
              <img src={personalInfo.image} alt={personalInfo.name} className="hero-image" />
            </div>

            <div className="hero-floating-tag batman">🦇 Batman Mode</div>
            <div className="hero-floating-tag ironman">🤖 Jarvis Active</div>
            <div className="hero-floating-tag spiderman">🕷 Web Reflex</div>
            <div className="hero-floating-tag tyler">🔥 Project Mayhem</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}