import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

export default function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="nav-brand">
        <span className="brand-k">K</span>
        <span className="brand-text">owshik.dev</span>
      </div>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>

      <a
        className="resume-nav-btn"
        href={personalInfo.resume}
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
    </motion.nav>
  );
}