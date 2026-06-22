import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <a href={isHome ? "#home" : "/#/"} className="nav-brand">
        <span className="brand-k">K</span>
        <span className="brand-text">Kowshik Mahi</span>
      </a>

      <div className="nav-links">
        <a href={isHome ? "#about" : "/#about"}>About</a>
        <a href={isHome ? "#skills" : "/#skills"}>Skills</a>
        <a href={isHome ? "#projects" : "/#projects"}>Projects</a>
        <a href={isHome ? "#experience" : "/#experience"}>Experience</a>
        <a href={isHome ? "#learning-logs" : "/#learning-logs"}>
          Learning Logs
        </a>
        <a href={isHome ? "#contact" : "/#contact"}>Contact</a>
      </div>

      <Link to="/admin-login" className="resume-nav-btn">
        Admin
      </Link>
    </motion.nav>
  );
}