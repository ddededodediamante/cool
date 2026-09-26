import Router from "preact-router";

import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Snake from "./pages/games/Snake.jsx";
import RandomNumberGenerator from "./pages/stuff/RandomNumberGenerator.jsx";

import Toolbar from "./components/Toolbar.jsx";
import Footer from "./components/Footer.jsx";
import Lore from "./pages/stuff/Lore.jsx";

export function App() {
  return (
    <>
      <Toolbar />

      <div id="app">
        <Router>
          <Home path="/" />
          <Snake path="/games/snake" />
          <Projects path="/projects" />
          <RandomNumberGenerator path="/stuff/rng" />
          <Lore path="/stuff/lore" />
        </Router>
      </div>

      <Footer />
    </>
  );
}
