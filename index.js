const body = document.body;
const container = document.querySelector(".grid-container");

function createGrid(size) {
  container.innerHTML = "";

  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.style.backgroundColor = `rgb(${Math.random() * 255}, ${
        Math.random() * 255
      }, ${Math.random() * 255})`;
      square.classList.add("square");
      row.appendChild(square);
    }

    container.appendChild(row);
  }
}

createGrid(100);
