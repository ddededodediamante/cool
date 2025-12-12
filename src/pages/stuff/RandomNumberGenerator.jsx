import { useState } from "react";

export default function RandomNumberGenerator() {
  const [multiplier, setMultiplier] = useState(9301);
  const [increment, setIncrement] = useState(49297);
  const [modulus, setModulus] = useState(233280);
  const [s, setS] = useState(1);

  const nextS = (s * multiplier + increment) % modulus;
  const r = nextS / modulus;

  return (
    <>
      <h1>Random Number Generator</h1>

      <div className="inline">
        <p>Multiplier:</p>
        <input
          type="number"
          value={multiplier}
          onChange={e => setMultiplier(e.currentTarget.valueAsNumber)}
        />
      </div>

      <div className="inline">
        <p>Increment:</p>
        <input
          type="number"
          value={increment}
          onChange={e => setIncrement(e.currentTarget.valueAsNumber)}
        />
      </div>

      <div className="inline">
        <p>Modulus:</p>
        <input
          type="number"
          value={modulus}
          onChange={e => setModulus(e.currentTarget.valueAsNumber)}
        />
      </div>

      <div className="inline">
        <p>Seed (s):</p>
        <input
          type="number"
          value={s}
          onChange={e => setS(e.currentTarget.valueAsNumber)}
        />
      </div>

      <br />

      <h3>Formula:</h3>
      <code>{`s = (s * ${multiplier} + ${increment}) % ${modulus}`}</code>
      <code>{`r = s / ${modulus}`}</code>

      <br />

      <h3>Computed Values:</h3>
      <p>
        <b>Next s:</b> {nextS}
      </p>
      <p>
        <b>r:</b> {r}
      </p>
    </>
  );
}
