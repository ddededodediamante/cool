import Router from "preact-router";

import Home from "./pages/Home.jsx";
import Games from "./pages/Games.jsx";
import Websites from "./pages/Websites.jsx";

import Snake from "./pages/games/Snake.jsx";
import Toolbar from "./components/Toolbar.jsx";
import Footer from "./components/Footer.jsx";

export function App() {
  return (<>
    <Toolbar />

    <Router>
      <Home path="/" />
      <Games path="/games" />
      <Snake path="/games/snake" />
      <Websites path="/websites" />
    </Router>

    <Footer />
  </>);
}
