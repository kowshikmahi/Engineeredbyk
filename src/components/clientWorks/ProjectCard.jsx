import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
} from "react-icons/fi";

export default function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <motion.article
      className="project-card glass"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.25 }}
    >
      {/* Thumbnail */}

      <div className="project-image-wrapper">

        <img
          src={project.thumbnail}
          alt={project.title}
          className="project-image"
        />

        {project.featured && (
          <span className="project-featured">
            Featured
          </span>
        )}

      </div>

      {/* Content */}

      <div className="project-body">

        <div className="project-header">

          <div>

            <p className="project-category">
              {project.category}
            </p>

            <h3>{project.title}</h3>

          </div>

          <FiArrowUpRight className="project-arrow" />

        </div>

        <p className="project-client">
          Client • {project.client}
        </p>

        <p className="project-description">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="project-tech-stack">

          {project.technologies?.map((tech) => (
            <span key={tech}>
              {tech}
            </span>
          ))}

        </div>

        {/* Buttons */}

        <div className="project-buttons">

          <Link
            to={`/projects/${project.slug}`}
            className="primary-btn small-btn"
          >
            View Details
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
            >
              <FiExternalLink />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
            >
              <FiGithub />
            </a>
          )}

        </div>

      </div>
    </motion.article>
  );
}