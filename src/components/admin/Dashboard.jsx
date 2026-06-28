import { useState } from "react";

import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

export default function Dashboard() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [refresh, setRefresh] = useState(false);

  function handleProjectSaved() {
    setRefresh(!refresh);
    setSelectedProject(null);
  }

  function handleEdit(project) {
    setSelectedProject(project);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleCancel() {
    setSelectedProject(null);
  }

  return (
    <div className="dashboard-container">

      {/* Header */}

      <div className="dashboard-header">

        <div>
          <h1>Portfolio CMS</h1>

          <p>
            Manage all client projects from one place.
          </p>
        </div>

      </div>

      {/* Editor */}

      <div className="dashboard-editor glass">

        <h2>
          {selectedProject
            ? "Edit Project"
            : "Create New Project"}
        </h2>

        <ProjectForm
          project={selectedProject}
          onSaved={handleProjectSaved}
          onCancel={handleCancel}
        />

      </div>

      {/* List */}

      <div className="dashboard-projects">

        <div className="dashboard-section-header">

          <h2>Projects</h2>

        </div>

        <ProjectList
          refresh={refresh}
          onEdit={handleEdit}
        />

      </div>

    </div>
  );
}