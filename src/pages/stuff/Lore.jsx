const CHARACTERS = [
  { name: "ddededodediamante", id: "normal", img: "/pictures/normal.png" },
  {
    name: "ddededodediamantella",
    id: "ddededodediamantella",
    img: "/pictures/ddededodediamantella.png",
  },
  { name: "evil ddededodediamante", id: "evil", img: "/pictures/evil.png" },
];

function Link({ id }) {
  const character = CHARACTERS.find(c => c.id === id);

  if (!character) {
    return <span>[unknown character: {id}]</span>;
  }

  return <a href={`#${character.id}`}>{character.name}</a>;
}

function Character({ id, children }) {
  const c = CHARACTERS.find(c => c.id === id);

  if (!c) return null;

  return (
    <>
      <h2 id={c.id}>{c.name}</h2>
      <img src={c.img} />
      {children}
    </>
  );
}

export default function Lore() {
  return (
    <>
      <h1>The ddededodediamante Lore</h1>

      <p>
        {CHARACTERS.map((c, i) => (
          <span key={c.id}>
            <Link id={c.id} />
            {i < CHARACTERS.length - 1 && " • "}
          </span>
        ))}
      </p>

      <Character id="normal">
        <p>He exists!</p>
      </Character>

      <Character id="ddededodediamantella">
        <p>
          She exists! She's <Link id="normal" />
          's sister.
        </p>
      </Character>

      <Character id="evil">
        <p>
          He is <Link id="normal" />'s enemy. Allergic to cats and immune to lava.
        </p>
      </Character>
    </>
  );
}
