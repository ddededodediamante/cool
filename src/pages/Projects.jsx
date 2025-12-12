import projects from "../config/projects.json";

export default function Projects() {
  return (
    <div className="infoHolder">
      {projects.map((item, index) => (
        <div
          class="projectInfoDiv"
          key={index}
          style={`--color: ${item.color}`}
        >
          <img src={item.icon} alt="A project's icon" />
          {item.name}
          <a href={item.url} target="_blank">
            Visit
          </a>
        </div>
      ))}
    </div>
  );
}
