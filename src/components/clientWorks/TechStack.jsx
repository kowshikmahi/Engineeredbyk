export default function TechStack({ technologies }) {
  return (
    <div className="project-tech">

      {technologies.map((tech) => (

        <span key={tech}>
          {tech}
        </span>

      ))}

    </div>
  );
}