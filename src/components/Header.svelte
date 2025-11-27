  <script lang="ts">
    import "../styles/Home.css";

    const name = "Jeffrey Hoelzel Jr.";
    const avatar = {
      url: import.meta.env.BASE_URL + "headshot_2025_Jeffrey-Hoelzel_3.jpg", 
      alt: "Headshot of Jeffrey Hoelzel Jr."
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
  
  <!-- Header -->
  <header class="siteHeader">
    <div class="wrap">
      <div class="navRow">
        <a href="#/" class="brand" aria-label="home">
          <div class="brandLogo">
            {#if avatar.url}
              <img
                class="brandPhoto"
                src={avatar.url}
                alt={avatar.alt}
                width="36"
                height="36"
              />
            {:else}
              <div class="brandPhoto" aria-hidden="true"></div>
            {/if}
          </div>
          <span class="brandName">{name}</span>
        </a>

        {#if actions.length}
          <nav aria-label="Actions" class="navLinks">
            {#each actions as action}
              <a href={action.url} class="navLink">
                {action.label}
              </a>
            {/each}
          </nav>
        {/if}
      </div>
    </div>
  </header>
