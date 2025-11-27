<script lang="ts">
  import "../styles/Home.css";
  import { FaGithub, FaLinkedin } from "svelte-icons/fa";

  // manually change if necessary
  const name = "Jeffrey Hoelzel Jr.";
  const headline = "Researcher & Software Engineering Student";
  const location = "Flagstaff, AZ";
  const summary = `
    I am a Software Engineering student at Northern Arizona University graduating in May 2026, with experience spanning machine learning, data science, and full-stack development. As a HURA Researcher, I apply AI to computational biology by predicting antibody epitopes across the infectome, advancing immunological research through deep learning. I have built large-scale data mining pipelines, developed AI-powered chatbots, and designed enterprise support tools that integrate RAG workflows and ML classifiers. Across research and industry, I focus on creating practical, impactful systems at the intersection of software engineering and machine learning.
  `.trim();
  const avatar = {
    url: import.meta.env.BASE_URL + "headshot_2025_Jeffrey-Hoelzel_3.jpg", 
    alt: "Headshot of Jeffrey Hoelzel Jr."
  };
  const socials = [
    {
      icon: "github", 
      label: "GitHub", 
      url: "https://github.com/jeffreyHoelzel"
    }, 
    {
      icon: "linkedin", 
      label: "LinkedIn", 
      url: "https://www.linkedin.com/in/jeffrey-hoelzel-jr/"
    }
  ];

  const iconFor = (raw?: string) => {
    const key = (raw || "").toLowerCase();
    if (key === "github") return FaGithub;
    if (key === "linkedin") return FaLinkedin;

    return null;
  };

  const actions = [
    {
      label: "View projects", 
      url: "#/projects"
    }, 
    {
      label: "Contact me", 
      url: "#/contact"
    }, 
    {
      label: "View resume", 
      url: "#/resume"
    }
  ];
</script>

<main>
  <!-- Hero  -->
  <section class="sectionPad">
    <div class="wrap hero">
      <div>
        <p class="kicker">Software Engineer</p>
        <h1 class="title">{name}</h1>
        {#if headline}
          <p class="subtitle">{headline}</p>
        {/if}
        {#if location}
          <p class="location">{location}</p>
        {/if}

        <div class="ctaRow">
          <a href="#/projects" class="btn">View projects</a>
          <a href="#/contact" class="btn">Contact me</a>
        </div>
      </div>

      <aside class="avatarCard">
        {#if avatar.url}
          <img
            class="avatarImg"
            src={avatar.url}
            alt={avatar.alt}
            width="330"
            height="400"
          />
        {:else}
          <div class="avatarImg" aria-hidden="true"></div>
        {/if}

        <div class="socials" aria-label="Social links">
          {#each socials as social}
            <a 
              class="iconBtn"
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
            >
              {#if iconFor(social.icon)}
                {@const Icon = iconFor(social.icon)}
                <Icon />
              {:else}
                {social.label}
              {/if}
            </a>
          {/each}
        </div>
      </aside>
    </div>
  </section>

  <!-- About -->
  <section class="about sectionPad" aria-label="About">
    <div class="wrap aboutGrid">
      <div>
        <h2 class="aboutTitle">About me</h2>
      </div>
      <p class="prose">
        {summary}
      </p>
    </div>
  </section>
</main>