import Toolbar from "../components/Toolbar";
import games from "../config/games.json";

export default function Games() {
  return (
    <>
      <Toolbar />

      <div id="infoHolder">
        {games.map((item, index) => (
          <div class="gameDiv" key={index}>
            <img src={item.icon} alt="A platform's icon" />
            <a href={item.url} target="_blank">
              Play
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
