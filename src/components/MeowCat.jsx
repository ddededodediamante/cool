export default function MeowCat() {
  function meow() {
    const audio = new Audio("/sounds/meow.mp3");
    audio.preservesPitch = false;
    audio.playbackRate = Math.random() * (1.1 - 0.9) + 0.9;
    audio.play();
  }

  return <img src="/icons/silly-cat.png" style={{ height: "3rem" }} onClick={meow} />;
}