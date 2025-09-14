import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProjects } from "../utils/api";
import { type ProjectMetadata } from "../utils/types";
import "../styles/Projects.css"

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectMetadata[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setError(null);
    setLoading(true);
    fetchProjects()
      .then(setProjects)
      .catch((e) => setError(e instanceof Error ? e.message : String(e)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <main className="sectionPad"><div className="wrap"><p>Loading projects...</p></div></main>;
  if (error) return <main className="sectionPad"><div className="wrap"><p>Error: {error}</p></div></main>;

  return (
    <main>
      <section className="sectionPad">
        <div className="wrap">
          <h1 className="pageTitle">Projects</h1>

          <div className="projectsGrid">
            {projects.map((p) => {
              const thumb = p.images?.[0]?.url ?? "";
              const alt = p.images?.[0]?.alt ?? `${p.name} thumbnail`;

              return (
                <article className="projectCard" key={p.slug}>
                  <Link to={`/projects/${p.slug}`} className="thumbWrap" aria-label={p.name}>
                    {thumb
                      ? <img className="projectThumb" src={thumb} alt={alt} loading="lazy" />
                      : <div className="projectThumb placeholder" aria-hidden="true" />  
                    }
                  </Link>
                  
                  <div className="projectMetadata">
                    <h2 className="projectTitle"><Link to={`/projects/${p.slug}`}>{p.name}</Link></h2>
                    {p.description && <p className="projectDesc">{p.description}</p>}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;
