import games from "../config/games.json";

export default function Games() {
  return (
    <div className="infoHolder">
      {games.map((item, index) => (
        <div class="gameDiv" key={index}>
          <img src={item.icon} alt="A videogame's icon" />
          <h2>{item.title}</h2>
          <a href={item.url} target="_blank">
            Play
          </a>
        </div>
      ))}
    </div>
  );
}
