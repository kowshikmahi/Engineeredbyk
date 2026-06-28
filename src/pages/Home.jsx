import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import LearningLogs from "../components/LearningLogs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ProjectGallery from "../components/clientWorks/ProjectGallery";
import "../index.css";

export default function Home() {
  return (
    <div className="app-shell">

      <div className="noise"></div>

      <Navbar />

      <Hero />

      <About />

      <Skills />

      {/* Client Works */}

      <section
        id="client-works"
        className="section"
      >

        <div className="section-heading">

          <p className="section-tag">
            CLIENT WORKS
          </p>

          <h2>

            Projects Built For

            <span className="gradient-text">
              {" "}Clients
            </span>

          </h2>

        </div>

        <ProjectGallery />

      </section>

      {/* Personal Projects */}

      <Projects />

      <Experience />

      <LearningLogs />

      <Contact />

      <Footer />

    </div>
  );
}