import { useEffect, useState } from "react";
import { getFeaturedProjects } from "../../services/clientWorks";
import ProjectCard from "./ProjectCard";

export default function ClientWorks() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getFeaturedProjects();
        setProjects(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <section className="section" id="client-works">
      <div className="section-heading">
        <p className="section-tag">CLIENT WORK</p>

        <h2>
          Projects Built For
          <span className="gradient-text"> Real Clients</span>
        </h2>

        <p className="section-description">
          Every project is designed with performance, aesthetics,
          responsiveness and business growth in mind.
        </p>
      </div>

      {loading ? (
        <div className="loading-projects">
          Loading Projects...
        </div>
      ) : (
        <div className="client-project-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      )}
    </section>
  );
}