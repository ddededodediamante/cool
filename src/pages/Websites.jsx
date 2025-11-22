import websites from "../config/websites.json";

export default function Websites() {
  return (
    <div className="infoHolder">
      {websites.map((item, index) => (
        <div class="websiteInfoDiv" key={index}>
          <img src={item.icon} alt="A website's icon" />
          {item.name}
          <a href={item.url} target="_blank">
            Visit
          </a>
        </div>
      ))}
    </div>
  );
}
