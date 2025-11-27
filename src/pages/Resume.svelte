<script lang="ts">
  import "../styles/Resume.css";
  import "../styles/Home.css";

  const resumeUrl = import.meta.env.BASE_URL + "Jeffrey_Hoelzel_Jr_resume.pdf";
  const title = "Resume";
  const subtitle = "View or download my current resume. Last updated November 2025.";
</script>

<main>
  <section class="sectionPad">
    <div class="wrap resumeLayout">
      <div class="resumeHeader">
        <h1 class="pageTitle">{title}</h1>
        <p class="resumeSubtitle"><i>{subtitle}</i></p>

        <div class="ctaRow">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            class="btn"
          >
            View in another tab
          </a>

          <a
            href={resumeUrl}
            download="Jeffrey-Hoelzel-Resume.pdf"
            class="btn"
          >
            Download PDF
          </a>
        </div>
      </div>

      <aside class="resumePreviewCard" aria-label="Resume preview">
        <div class="resumeFrame">
          <iframe
            src={resumeUrl}
            title="Resume preview"
            loading="lazy"
          ></iframe>
        </div>
      </aside>
    </div>
  </section>
</main>
