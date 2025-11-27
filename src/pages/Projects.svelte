<script lang="ts">
  import "../styles/Projects.css";

  type ProjectImage = {
    url: string;
    alt?: string;
  };

  type Project = {
    name: string;
    description: string;
    images: ProjectImage[];
    currentIndex: number;
  };

  const BASE_URL = import.meta.env.BASE_URL;

  // add new projects here
  let projects: Project[] = [
    {
      name: "PepSeqPred", 
      description: "A machine learning model to predict antibody epitopes from peptide sequences using deep learning techniques.",
      images: [], 
      currentIndex: 0
    }, 
    {
      name: "UltraSignUp Data Mining", 
      description: "A data mining pipeline that extracts and processes trail race data from UltraSignUp for analysis and reporting.", 
      images: [], 
      currentIndex: 0
    }, 
    {
      name: "ArtemiS3", 
      description: "An intelligent search tool for NASA and USGS AWS S3 buckets, enabling efficient data retrieval and exploration.", 
      images: [], 
      currentIndex: 0
    }, 
    {
      name: "MACH-IV Clustering", 
      description: "A clustering algorithm implementation to group MACH-IV personality assessment results for psychological studies.", 
      images: [], 
      currentIndex: 0
    }, 
    {
      name: "Campus Health Chatbot", 
      description: "An AI-powered chatbot testing platform designed to assist students with campus health inquiries and provide relevant information.", 
      images: [], 
      currentIndex: 0
    }, 
    {
      name: "Louie's Ratings", 
      description: "A web application similar to RateMyProfessor that allows students to rate and review their NAU professors and view course data like previous grade distributions.", 
      images: [], 
      currentIndex: 0
    }
  ];

  // handle image rotation for projects with multiple images
  function currentImage(p: Project): ProjectImage | null {
    if (!p.images || p.images.length === 0) return null;
    return p.images[p.currentIndex] ?? p.images[0];
  }
  function nextImage(index: number) {
    const p = projects[index];
    if (!p || p.images.length === 0) return;
    p.currentIndex = (p.currentIndex + 1) % p.images.length;
    projects = [...projects];
  }
  function prevImage(index: number) {
    const p = projects[index];
    if (!p || p.images.length === 0) return;
    p.currentIndex = (p.currentIndex - 1 + p.images.length) % p.images.length;
    projects = [...projects];
  }
</script>

<main>
  <section class="sectionPad">
    <div class="wrap">
      <h1 class="pageTitle">Projects</h1>

      <div class="projectsGrid">
        {#each projects as project, i}
          {#key project.name}
            <article class="projectCard">
              <div class="thumbWrap" aria-label={project.name}>
                {#if currentImage(project)}
                  <img
                    class="projectThumb"
                    src={currentImage(project)!.url}
                    alt={currentImage(project)!.alt ?? `${project.name} thumbnail`}
                    loading="lazy"
                  />
                {:else}
                  <div class="projectThumb placeholder" aria-hidden="true">
                    Images coming soon!
                  </div>
                {/if}

                <!-- handle revolving images -->
                {#if project.images.length > 1}
                  <button
                    class="carouselBtn prevCarouselBtn"
                    type="button"
                    aria-label="Previous image"
                    on:click={() => prevImage(i)}
                  >&#10094;</button>

                  <button
                    class="carouselBtn nextCarouselBtn"
                    type="button"
                    aria-label="Next image"
                    on:click={() => nextImage(i)}
                  >&#10095;</button>

                  <div class="carouselDots" aria-hidden="true">
                    {#each project.images as _, j}
                      <span 
                        class:dotActive={j === project.currentIndex}
                        class="dot"
                      ></span>
                    {/each}
                  </div>
                {/if}
              </div>

              <div class="projectMetadata">
                <h2 class="projectTitle">{project.name}</h2>
                {#if project.description}
                  <p class="projectDesc">{project.description}</p>
                {/if}
              </div>
            </article>
          {/key}
        {/each}
      </div>
    </div>
  </section>
</main>