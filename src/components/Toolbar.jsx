import { useState, useEffect } from "react";

export default function Toolbar() {
  const [dark, setDark] = useState(localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", dark);
  }, [dark]);

  function toggleDarkMode() {
    setDark((prev) => !prev);
  }

  return (
    <div className="toolbar">
      <a href="/"> Main Page </a>
      <a href="/games"> Games </a>
      <a href="/projects"> Projects </a>
      <img
        src={dark ? "/icons/sun.svg" : "/icons/moon.svg"}
        onClick={toggleDarkMode}
      />
    </div>
  );
}
