const body = document.body;
const container = document.querySelector(".grid-container");
const buttons = document.querySelectorAll("button");

function createGrid(size) {
  container.innerHTML = "";

  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.style.backgroundColor = "white";
      square.classList.add("square");
      row.appendChild(square);
    }

    container.appendChild(row);
  }
}

createGrid(50);

function setColorMode(mode) {
  if (mode === "black" || mode === "rainbow" || mode === "eraser") {
    document
      .getElementById("grid-container")
      .addEventListener("mouseover", function (e) {
        if (e.target && e.target.nodeName == "DIV") {
          if (mode === "black") {
            e.target.style.backgroundColor = "black";
          } else if (mode === "rainbow") {
            e.target.style.backgroundColor = `rgb(${Math.random() * 255}, ${
              Math.random() * 255
            }, ${Math.random() * 255})`;
          } else if (mode === "eraser") {
            e.target.style.backgroundColor = "white";
          }
        }
      });
  }
}

function clearCanvas() {
  const squares = container.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
}

document
  .getElementById("btn-black")
  .addEventListener("click", () => setColorMode("black"));

document
  .getElementById("btn-rainbow")
  .addEventListener("click", () => setColorMode("rainbow"));

document
  .getElementById("btn-eraser")
  .addEventListener("click", () => setColorMode("eraser"));

document.getElementById("clear-canvas").addEventListener("click", clearCanvas);
