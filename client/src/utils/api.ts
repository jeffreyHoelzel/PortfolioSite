import { type ProjectMetadata } from "./types";
const API_BASE = "http://localhost:5000";

export const fetchProjects = (): Promise<ProjectMetadata[]> => 
  fetch(`${API_BASE}/api/projects`).then((res) => {
    if (!res.ok) throw new Error(`Request failed with ${res.status}`);
    return res.json();
  });

export const fetchProject = (slug: string): Promise<ProjectMetadata> => 
  fetch(`${API_BASE}/api/projects/${slug}`).then((res) => {
    if (!res.ok) throw new Error(`Request failed with ${res.status}`);
    return res.json();
  });
