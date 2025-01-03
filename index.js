const body = document.body;
const container = document.querySelector(".grid-container");

const createGrid = (gridSize) => {
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.border = "2px solid black";
    row.style.padding = "5px";
    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement("div");
      cell.style.display = "flex"; // Flexbox for centering cell content
      cell.style.justifyContent = "center";
      cell.style.alignItems = "center";
      cell.style.width = "20px"; // Set cell dimensions
      cell.style.height = "20px";
      cell.style.padding = "10px";
      cell.style.border = "1px solid gray";
      cell.style.backgroundColor = `rgb(${Math.random() * 255}, ${
        Math.random() * 255
      }, ${Math.random() * 255})`;
      row.append(cell);
    }
    container.append(row);
  }
};

createGrid(10);
