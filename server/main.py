import os
from pathlib import Path
from typing import List, Dict
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from schemas import ProjectMetadata, HomeMetadata
from contentloader import list_projects, get_project, load_homepage

app = FastAPI(title="Portfolio API")

origins = os.getenv("CORS_ORIGINS", "http://localhost,http://127.0.0.1").split(",")

app.add_middleware(
    CORSMiddleware, 
    allow_origins=origins, 
    allow_credentials=False, 
    allow_methods=["*"], 
    allow_headers=["*"]
)

MEDIA_ROOT = Path(os.getenv("MEDIA_ROOT", "content/media"))
MEDIA_ROOT.mkdir(parents=True, exist_ok=True)
app.mount("/media", StaticFiles(directory=str(MEDIA_ROOT)), name="media")

@app.get("/api/home", tags=["home"])
def home() -> HomeMetadata:
    return load_homepage()

@app.get("/api/projects", response_model=List[ProjectMetadata], tags=["projects"])
def api_list_projects() -> List[ProjectMetadata]:
    return list_projects()

@app.get("/api/projects/{slug}", response_model=ProjectMetadata, tags=["projects"])
def api_get_project(slug: str) -> ProjectMetadata:
    return get_project(slug)
