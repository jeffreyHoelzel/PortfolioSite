<script lang="ts">
  import Router from "svelte-spa-router";

  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";

  import Home from "./pages/Home.svelte";
  import Projects from "./pages/Projects.svelte";
  import Contact from "./pages/Contact.svelte";
  import Resume from "./pages/Resume.svelte";
  import ComingSoon from "./pages/ComingSoon.svelte";

  const routes = {
    "/": Home, 
    "/projects": Projects, 
    "/contact": Contact, 
    "/resume": Resume, 
    "*": ComingSoon
  };
</script> 

<Header />
<main>
  <Router {routes} />
</main>
<Footer />
