import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import LearningLogs from "../components/LearningLogs";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <LearningLogs />

      <section className="section" id="contact">
        <div className="section-heading">
          <p className="section-tag">CONTACT</p>
          <h2>Let’s build something useful together.</h2>
        </div>

        <div className="glass contact-card">
          <p>
            I’m open to web development roles, engineering-driven product work,
            and projects where software meets practical problem-solving.
          </p>

          <div className="contact-links">
            <a href="mailto:kowshikmahi@gmail.com" className="primary-btn">
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/kowshik-mahi/"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}