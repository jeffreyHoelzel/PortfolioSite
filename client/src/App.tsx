import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home"
import Projects from "./components/Projects";
import { fetchHomepage } from "./utils/api";
import { type HomeMetadata } from "./utils/types";

const App: React.FC = () => {
  const [headerContent, setHeaderContent] = useState<HomeMetadata | null>(null);

  useEffect(() => {
    fetchHomepage()
      .then(setHeaderContent)
      .catch(() => setHeaderContent(null));
  }, []);

  return (
    <main>
      <Header name={headerContent?.name} avatar={headerContent?.avatar} actions={headerContent?.actions} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer name={headerContent?.name} />
    </main>
  );
}

export default App;
