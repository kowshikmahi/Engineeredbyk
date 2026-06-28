import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";
import { getAllProjects } from "../../services/clientWorks";

export default function ProjectGallery() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    try {
      const data = await getAllProjects();
      setProjects(data);
    } catch (error) {
      console.error("Error loading projects", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <section className="project-gallery-loading">

        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="project-skeleton glass"
          >
            <div className="skeleton-image"></div>

            <div className="skeleton-body">
              <div className="skeleton-line short"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-line"></div>
            </div>
          </div>
        ))}

      </section>
    );
  }

  if (!projects.length) {
    return (
      <div className="projects-empty glass">
        <h3>No Projects Yet</h3>

        <p>
          Client projects will appear here once they are
          published from the admin panel.
        </p>
      </div>
    );
  }

  return (
    <motion.section
      className="projects-grid"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </motion.section>
  );
}