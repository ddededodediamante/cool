import socials from "../config/socials.json";
import programming from "../config/programming.json";

export default function Home() {
  return (
    <>
    <div id=""></div>
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

      <div className="infoHolder">
        <div className="informationDiv">
          <h2>My Programming Languages</h2>
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
        </div>
        <div className="informationDiv">
          <h2>Github Stats</h2>
          <img src="https://github-readme-stats.vercel.app/api?username=ddededodediamante&hide_title=true" />
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
