<script lang="ts">
  import "./styles/Home.css";
  import Router from "svelte-spa-router";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Home from "./pages/Home.svelte";
  import Projects from "./pages/Projects.svelte";
  import Contact from "./pages/Contact.svelte";
  import Resume from "./pages/Resume.svelte";

  const routes = {
    "/": Home, 
    "/projects": Projects, 
    "/contact": Contact, 
    "/resume": Resume
  };
</script>

<main>
  <Header />
  <Router {routes} />
  <Footer />
</main>
