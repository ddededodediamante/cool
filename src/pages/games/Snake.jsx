import { useEffect, useRef, useState } from "react";
import Toolbar from "../../components/Toolbar";

export default function Snake() {
  const canvasRef = useRef(null);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const tileSize = 20;
    const tileCount = canvas.width / tileSize;

    let snake = [{ x: 10, y: 10 }];
    let direction = { x: 1, y: 0 };
    let food = { x: 15, y: 15 };
    let gameInterval,
      canChangeDir = true;

    function reset() {
      snake = [{ x: 10, y: 10 }];
      direction = { x: 1, y: 0 };
      food = { x: 15, y: 15 };
    }

    function newFood() {
      let pos;
      do {
        pos = {
          x: Math.floor(Math.random() * tileCount),
          y: Math.floor(Math.random() * tileCount),
        };
      } while (snake.some((i) => pos.x === i.x && pos.y === i.y));

      food = pos;
    }

    function drawRect(x, y) {
      ctx.fillRect(
        x * tileSize + 1,
        y * tileSize + 1,
        tileSize - 2,
        tileSize - 2
      );
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "red";
      drawRect(food.x, food.y, "red");

      ctx.fillStyle = "lime";
      for (const part of snake) {
        drawRect(part.x, part.y, "lime");
      }
    }

    function update() {
      const head = {
        x: snake[0].x + direction.x,
        y: snake[0].y + direction.y,
      };

      if (
        head.x < 0 ||
        head.y < 0 ||
        head.x >= tileCount ||
        head.y >= tileCount ||
        snake.slice(1).some((i) => head.x === i.x && head.y === i.y)
      ) {
        clearInterval(gameInterval);
        alert("Game over!");
        reset();
        setRunning(false);
        return;
      }

      snake.unshift(head);

      if (head.x === food.x && head.y === food.y) {
        newFood();
      } else {
        snake.pop();
      }

      draw();

      canChangeDir = true;
    }

    function handleKey(e) {
      if (!canChangeDir) return;
      canChangeDir = false;

      switch (e.key) {
        case "ArrowUp":
          if (direction.y === 0) direction = { x: 0, y: -1 };
          break;
        case "ArrowDown":
          if (direction.y === 0) direction = { x: 0, y: 1 };
          break;
        case "ArrowLeft":
          if (direction.x === 0) direction = { x: -1, y: 0 };
          break;
        case "ArrowRight":
          if (direction.x === 0) direction = { x: 1, y: 0 };
          break;
      }
    }

    if (running) {
      window.addEventListener("keydown", handleKey);
      gameInterval = setInterval(update, 100);
      draw();
    }

    return () => {
      window.removeEventListener("keydown", handleKey);
      clearInterval(gameInterval);
    };
  }, [running]);

  return (
    <>
      <Toolbar />
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        style={{
          backgroundColor: "#1d2227",
          display: "block",
          margin: "1rem auto",
        }}
      />
      <div style={{ textAlign: "center" }}>
        <button onClick={() => setRunning(!running)}>
          {running ? "Stop" : "Start"}
        </button>
      </div>
    </>
  );
}
