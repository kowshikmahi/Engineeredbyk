import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import LearningLogs from "./components/LearningLogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";
import ProjectDetails from "./pages/ProjectDetails";

export default function App() {
  return (
    <div className="app-shell">
      <div className="noise"></div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <LearningLogs />
      <Contact />
      <Footer />
    </div>
  );
}