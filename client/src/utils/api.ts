import { type ProjectMetadata, type HomeMetadata, type ContactMetadata } from "./types";
const API_BASE = "/api";

export const fetchHomepage = (): Promise<HomeMetadata> => 
  fetch(`${API_BASE}/home`).then((res) => {
    if (!res.ok) throw new Error(`Request for homepage failed with ${res.status}`);
    return res.json();
  })

export const fetchProjects = (): Promise<ProjectMetadata[]> => 
  fetch(`${API_BASE}/projects`).then((res) => {
    if (!res.ok) throw new Error(`Request for list of projects failed with ${res.status}`);
    return res.json();
  });

export const fetchProject = (slug: string): Promise<ProjectMetadata> => 
  fetch(`${API_BASE}/projects/${slug}`).then((res) => {
    if (!res.ok) throw new Error(`Request for project '${slug}' failed with ${res.status}`);
    return res.json();
  });

export const fetchContactPage = (): Promise<ContactMetadata> => 
  fetch(`${API_BASE}/contact`).then((res) => {
    if (!res.ok) throw new Error(`Request for contact page failed with ${res.status}`);
    return res.json();
  });

export const postContactForm = async (name: string, email: string, message: string): Promise<Response> => {
  const res = await fetch(`${API_BASE}/contact`, {
    method: "POST", 
    headers: {"Content-Type": "application/json" }, 
    body: JSON.stringify({
      "name": name, 
      "email": email, 
      "message": message
    })
  });

  if (!res.ok) throw new Error(`Contact form submission failed: ${res.status}`);
  return res.json();
}
