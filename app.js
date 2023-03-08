let color = "black";

function populateGrid(size) {
  let grid = document.querySelector("#etch-grid");
  let squares = grid.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    grid.insertAdjacentElement("beforeend", square);
  }
}

populateGrid(16);

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    populateGrid(input);
  } else {
    console.log("Invalid square amount. Must be within 2-100.");
  }
}

function colorSquare() {
  if (color === "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}

function changeColor(choice) {
  color = choice;
}

function resetBoard() {
  let grid = document.querySelector("#etch-grid");
  let squares = grid.querySelectorAll("div");
  squares.forEach((div) => div.remove());
}
