import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFileDownload,
} from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-tag">CONTACT</p>
        <h2>Let’s build something that deserves a dramatic entrance.</h2>
      </motion.div>

      <motion.div
        className="contact-card glass"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="contact-left">
          <h3>Kowshik Mahendran</h3>
          <p>
            Open to web development opportunities, creative engineering projects,
            and building useful products with strong UI and technical thinking.
          </p>

          <div className="contact-info">
            <div><FaEnvelope /> <span>{personalInfo.email}</span></div>
            <div><FaPhoneAlt /> <span>{personalInfo.phone}</span></div>
            <div><FaMapMarkerAlt /> <span>{personalInfo.location}</span></div>
          </div>
        </div>

        <div className="contact-right">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="contact-icon">
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="contact-icon">
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a href={personalInfo.instagram} target="_blank" rel="noreferrer" className="contact-icon">
            <FaInstagram />
            <span>Instagram</span>
          </a>
          <a href={personalInfo.resume} target="_blank" rel="noreferrer" className="contact-icon">
            <FaFileDownload />
            <span>Resume</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}