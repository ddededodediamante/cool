import { useState } from "react";
import socials from "../config/socials.json";
import { programming, spokenLanguages, tools } from "../config/stuff.json";

export default function Home() {
  const [skillsTab, setSkillsTab] = useState("languages");

  return (
    <>
      <div className="content">
        <div className="info">
          <img src="/icons/ddededodediamante.png" className="pfp" />
          <h2>
            ddededodediamante
            <img
              style={{ height: "1em" }}
              src="/icons/argentina.svg"
              alt="from Argentina"
              title="Argentina"
            />
          </h2>
          <div id="buttonHolder" className="hidden">
            {socials.map((item, index) => (
              <a key={index} href={item.url} target="_blank" className="social-button">
                <img src={item.icon} alt="A platform's icon" />
              </a>
            ))}
          </div>
        </div>

        <div className="info">
          <h2>Some of my skills :)</h2>
          <div className="skills-tabs">
            <button
              className={"tab-btn" + (skillsTab === "languages" ? " active" : "")}
              onClick={() => setSkillsTab("languages")}
            >
              💻 Languages
            </button>
            <button
              className={"tab-btn" + (skillsTab === "tools" ? " active" : "")}
              onClick={() => setSkillsTab("tools")}
            >
              🔧 Tools
            </button>
            <button
              className={"tab-btn" + (skillsTab === "spoken" ? " active" : "")}
              onClick={() => setSkillsTab("spoken")}
            >
              🗣️ Spoken
            </button>
          </div>

          {skillsTab === "languages" && (
            <div className="grid-three-elements">
              {programming.used.map((item, index) => (
                <span
                  key={index}
                  className={
                    "programming-language" +
                    (programming.favorite.includes(item) ? " favorite" : "")
                  }
                >
                  <img
                    alt={item}
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item}/${item}-original.svg`}
                  />
                </span>
              ))}
            </div>
          )}

          {skillsTab === "tools" && (
            <div className="cool-list">
              {tools.map((tool, index) => (
                <div key={index} className="item" title={tool.name}>
                  <img
                    style={{ height: "1.5em" }}
                    src={
                      tool.name === "GitHub"
                        ? "/icons/github.svg"
                        : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tool.icon}.svg`
                    }
                    alt={tool.name}
                  />
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          )}

          {skillsTab === "spoken" && (
            <div className="cool-list">
              {spokenLanguages.map((lang, index) => (
                <div key={index} className="item">
                  <img style={{ height: "1.5em" }} src={lang.flag} alt={lang.name} />
                  <span>{lang.name}</span>
                  <span className="tag">{lang.level}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="info">
          <h2>About Me</h2>
          <p>
            Hey! I'm a full-stack developer from Argentina 🇦🇷 who loves building websites,
            games, and Discord bots. I speak Spanish natively and English fluently.
          </p>
          <p>
            Outside of coding, I'm a big fan of platformers and incrementals, they're a
            huge part of why I got into game dev in the first place.
          </p>
        </div>
      </div>

      <div id="webring">
        <div>
          <a href="https://steve0greatness.github.io/webring/sites/ddededodediamante/prev.xhtml">
            Previous
          </a>
        </div>
        <div>
          <img
            src="https://steve0greatness.github.io/webring/logo-dark-500.webp"
            width="125"
            height="52"
            style={{ cursor: "pointer" }}
            onClick={() => window.open("https://steve0greatness.github.io/webring")}
          />
        </div>
        <div>
          <a href="https://steve0greatness.github.io/webring/sites/ddededodediamante/next.xhtml">
            Next
          </a>
        </div>
      </div>
    </>
  );
}
