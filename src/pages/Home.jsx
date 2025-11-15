import Toolbar from "../components/Toolbar";
import socials from "../config/socials.json";

export default function Home() {
  return (
    <>
      <Toolbar />

      <h1>ddededodediamante</h1>

      <img src="/icons/ddededodediamante.png" id="ddededodediamante" />

      <div id="buttonHolder" className="hidden">
        {socials.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            className="social-button"
          >
            <img src={item.icon} alt="A platform's icon" />
          </a>
        ))}
      </div>

      <div id="infoHolder">
        <div className="informationDiv">
          <h2>Top Languages</h2>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=ddededodediamante&layout=compact&hide_title=true"
            id="githubTopLanguagesImg"
          />
        </div>
        <div className="informationDiv">
          <h2>Github Stats</h2>
          <img
            src="https://github-readme-stats.vercel.app/api?username=ddededodediamante&hide_title=true"
            id="githubStatsImg"
          />
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
            onClick={() =>
              window.open("https://steve0greatness.github.io/webring")
            }
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
