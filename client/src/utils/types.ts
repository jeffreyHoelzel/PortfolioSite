export type ImageMetadata = {
  url: string, 
  alt?: string
};
export type ProjectMetadata = {
  slug: string, 
  name: string, 
  description: string, 
  images: ImageMetadata[], 
  links?: Record<string, string>
};