import Router from "preact-router";

import Home from "./pages/Home.jsx";
import Games from "./pages/Games.jsx";
import Projects from "./pages/Projects.jsx";
import Snake from "./pages/games/Snake.jsx";
import RandomNumberGenerator from "./pages/stuff/RandomNumberGenerator.jsx";

import Toolbar from "./components/Toolbar.jsx";
import Footer from "./components/Footer.jsx";

export function App() {
  return (
    <>
      <Toolbar />

      <Router>
        <Home path="/" />
        <Games path="/games" />
        <Snake path="/games/snake" />
        <Projects path="/projects" />
        <RandomNumberGenerator path="/stuff/rng" />
      </Router>

      <Footer />
    </>
  );
}
