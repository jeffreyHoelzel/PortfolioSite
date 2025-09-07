from typing import List, Dict, Optional
from pydantic import BaseModel

class ImageMetadata(BaseModel):
    url: str
    alt: Optional[str] = None

class ProjectMetadata(BaseModel):
    slug: str
    name: str
    description: str
    images: List[ImageMetadata]
    links: Optional[List[Dict[str, str]]] = None
