<script lang="ts">
  import "../styles/Contact.css";
  import { FaGithub, FaLinkedin, FaEnvelope } from "svelte-icons/fa";

  const subtitle1 = "I'm always open to discussing new opportunities relating to software engineering roles, research collaborations, or project ideas.";
  const subtitle2 = "The best way to get in contact with me is over email.";

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
    }, 
    {
      icon: "email", 
      label: "Email", 
      url: "mailto:jeffreyhoelzeljr@gmail.com"
    }
  ];

  const iconFor = (raw?: string) => {
    const key = (raw || "").toLowerCase();
    if (key === "github") return FaGithub;
    if (key === "linkedin") return FaLinkedin;
    if (key === "email") return FaEnvelope;

    return null;
  };
</script>

<section class="sectionPad contactSection">
  <div class="wrap">
    <div class="contactCard">
      <h1 class="contactTitle">Get in Touch</h1>
      <p class="contactSubtitle">{subtitle1} <i>{subtitle2}</i></p>
      <div class="contactMethods">
        {#each socials as social}
          <a
            class="contactIcon"
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {#if iconFor(social.icon)}
              {@const Icon = iconFor(social.icon)}
              <Icon size="16" class="contactIcon" />
            {/if}
            <span class="contactLinkText">{social.label}</span>
          </a>
        {/each}
      </div>
    </div>
  </div>
</section>
