import Router from "preact-router";

import Home from "./pages/Home.jsx";
import Games from "./pages/Games.jsx";
import Websites from "./pages/Websites.jsx";

export function App() {
  return (
    <Router>
      <Home path="/" />
      <Games path="/games" />
      <Websites path="/websites" />
    </Router>
  );
}
