<script lang="ts">
  import "../styles/Home.css";

  export let title: string = "Coming soon";
  export let subtitle: string =
    "This page is still under construction. Check back again soon.";
  export let kicker: string = "Work in progress";

  // optional primary / secondary actions
  export let primaryHref: string = "#/";
  export let primaryLabel: string = "Back to home";

  export let secondaryHref: string | null = null;
  export let secondaryLabel: string = "View projects";
</script>

<main>
  <section class="sectionPad comingSoon">
    <div class="wrap comingSoonInner">
      <p class="kicker comingSoonKicker">{kicker}</p>
      <h1 class="title comingSoonTitle">{title}</h1>

      {#if subtitle}
        <p class="subtitle comingSoonSubtitle">
          {subtitle}
        </p>
      {/if}

      <div class="ctaRow">
        {#if primaryHref}
          <a href={primaryHref} class="btn">
            {primaryLabel}
          </a>
        {/if}

        {#if secondaryHref}
          <a href={secondaryHref} class="btn comingSoonGhost">
            {secondaryLabel}
          </a>
        {/if}
      </div>
    </div>
  </section>
</main>

<style>
  .comingSoon {
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle at top, #151822 0, #0b0c10 55%);
    text-align: left;
  }

  .comingSoonInner {
    max-width: 720px;
  }

  .comingSoonKicker {
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-size: 0.8rem;
    color: var(--muted);
  }

  .comingSoonTitle {
    margin-top: 6px;
  }

  .comingSoonSubtitle {
    margin-top: 10px;
    max-width: 52ch;
    color: #c3cad5;
  }

  .comingSoonGhost {
    background: transparent;
    border-color: color-mix(in oklab, var(--ink) 8%, transparent);
  }
  .comingSoonGhost:hover {
    border-color: var(--accent);
    background: linear-gradient(180deg, #151822, #0f1118);
  }

  @media (max-width: 640px) {
    .comingSoon {
      text-align: left;
    }
    .comingSoonInner {
      padding-inline: 0;
    }
  }
</style>
