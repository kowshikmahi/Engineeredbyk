import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";

import { getProjectBySlug } from "../services/clientWorks";

export default function ProjectDetails() {
  const { slug } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProject();
  }, [slug]);

  async function loadProject() {
    try {
      const data = await getProjectBySlug(slug);
      setProject(data);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <section className="section">
        <div className="loading-project">
          Loading Project...
        </div>
      </section>
    );
  }

  if (!project) {
    return (
      <section className="section">
        <div className="project-not-found glass">
          <h2>Project Not Found</h2>

          <Link to="/" className="primary-btn">
            Back Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section project-page">

      <Link
        to="/"
        className="back-btn"
      >
        <FiArrowLeft />
        Back
      </Link>

      {/* HERO */}

      <motion.div
        className="project-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >

        <img
          src={project.thumbnail}
          alt={project.title}
        />

      </motion.div>

      {/* HEADER */}

      <motion.div
        className="project-header-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >

        <span className="project-category">
          {project.category}
        </span>

        <h1>{project.title}</h1>

        <p className="project-client">
          Client : {project.client}
        </p>

        <p className="project-description">
          {project.fullDescription}
        </p>

      </motion.div>

      {/* TECH STACK */}

      <div className="project-stack">

        <h3>Technologies Used</h3>

        <div className="project-tech-stack">

          {project.technologies?.map((tech) => (

            <span key={tech}>
              {tech}
            </span>

          ))}

        </div>

      </div>

      {/* GALLERY */}

      <div className="project-gallery">

        <h3>Gallery</h3>

        <div className="gallery-grid">

          {project.gallery?.map((image, index) => (

            <img
              key={index}
              src={image}
              alt={project.title}
            />

          ))}

        </div>

      </div>

      {/* BUTTONS */}

      <div className="project-links">

        {project.liveUrl && (

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            <FiExternalLink />
            Live Website
          </a>

        )}

        {project.githubUrl && (

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            <FiGithub />
            Source Code
          </a>

        )}

      </div>

    </section>
  );
}