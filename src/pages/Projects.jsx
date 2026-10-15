import { useState } from "react";
import projects from "../config/projects.json";
import "./Projects.css";

export default function Projects() {
  const [current, setCurrent] = useState(null);

  function toggle(index) {
    setCurrent(current === index ? null : index);
  }

  return (
    <div className="infoHolder">
      {projects.map((item, index) => (
        <div
          className="projectInfoDiv inline"
          key={index}
          style={`
            --color: ${item.color};
            ${current === index ? "width: 100%; min-width: 23rem; order: -1" : ""}
          `}
        >
          <div className="vertical">
            <img src={item.icon} alt="A project's icon" />
            {item.name}
            <div className="inline">
              <a href={item.url} target="_blank">
                Visit
              </a>
              {item.description && (
                <button onClick={() => toggle(index)}>
                  {current === index ? "-" : "+"}
                </button>
              )}
            </div>
          </div>
          {item.description && current === index && (
            <p className="description">{item.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}
