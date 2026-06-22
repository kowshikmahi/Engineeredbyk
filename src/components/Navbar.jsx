import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <a href="#home" className="nav-brand">
        <span className="brand-k">K</span>
        <span className="brand-text">Kowshik Mahi</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#learning-logs">Learning Logs</a>
        <a href="#contact">Contact</a>
      </div>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="resume-nav-btn"
      >
        Resume
      </a>
    </motion.nav>
  );
}