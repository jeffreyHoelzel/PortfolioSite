import Projects from "./components/Projects";

const App: React.FC = () => {
  return (
    <main style={{ fontFamily: "system-ui", padding: "2rem" }}>
      <h1>My Portfolio</h1>
      <Projects />
    </main>
  );
}

export default App;
