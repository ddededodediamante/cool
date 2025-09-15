import Toolbar from "../components/Toolbar";
import websites from "../config/websites.json";

export default function Websites() {
  return (
    <>
      <Toolbar />

      <div id="infoHolder">
        {websites.map((item, index) => (
          <div class="websiteInfoDiv">
            <img src={item.icon} />
            {item.name}
            <a href={item.url} target="_blank">
              Visit
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
