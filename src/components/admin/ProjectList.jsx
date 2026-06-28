import { useEffect, useState } from "react";
import {
  getAllProjects,
  deleteClientWork,
} from "../../services/clientWorks";
export default function ProjectList({
  onEdit,
  refresh,
}) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadProjects() {
    setLoading(true);

    try {
      const data = await getAllProjects();
      setProjects(data);
    } catch (err) {
      console.error(err);
      alert("Unable to load projects.");
    }

    setLoading(false);
  }

  useEffect(() => {
    loadProjects();
  }, [refresh]);

  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Delete this project?"
    );

    if (!confirmDelete) return;

    try {
      await deleteProject(id);
      loadProjects();
    } catch (err) {
      console.error(err);
      alert("Delete failed.");
    }
  }

  if (loading)
    return (
      <div className="admin-loading">
        Loading Projects...
      </div>
    );

  if (projects.length === 0)
    return (
      <div className="admin-empty">
        No projects found.
      </div>
    );

  return (
    <div className="project-list">

      {projects.map((project) => (

        <div
          className="project-item glass"
          key={project.id}
        >

          <img
            src={project.thumbnail}
            alt={project.title}
            className="project-thumb"
          />

          <div className="project-content">

            <div className="project-top">

              <h3>{project.title}</h3>

              {project.featured && (
                <span className="featured-badge">
                  Featured
                </span>
              )}

            </div>

            <p className="project-client">
              {project.client}
            </p>

            <p className="project-category">
              {project.category}
            </p>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tech">

              {project.technologies?.map((tech) => (
                <span key={tech}>
                  {tech}
                </span>
              ))}

            </div>

            <div className="project-actions">

              <button
                className="primary-btn small-btn"
                onClick={() => onEdit(project)}
              >
                Edit
              </button>

              <button
                className="delete-btn small-btn"
                onClick={() =>
                  handleDelete(project.id)
                }
              >
                Delete
              </button>

            </div>

          </div>

        </div>

      ))}

    </div>
  );
}