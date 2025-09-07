import { useEffect, useState } from "react";
import { fetchProjects } from "../api";
import { type ProjectMetadata } from "../types";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectMetadata[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    setError(null);
    fetchProjects()
      .then(setProjects)
      .catch((e) => setError(e instanceof Error ? e.message : String(e)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section>
      <h2>Projects</h2>
      <ul>
        {projects.map((proj) => (
          <li key={proj.slug} style={{ marginBottom: "16px" }}>
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {proj.images.map((img, i) => (
                <img 
                  key={i}
                  src={`http://localhost:5000/${img.url}`}
                  alt={img.alt ?? proj.name}
                  style={{ maxWidth: "280px", height: "auto", borderRadius: "8px" }}
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
