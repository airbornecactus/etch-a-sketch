const container = document.querySelector("#container");

function createGrid(rows, cols) {
  for (i = 0; i < rows; i++) {
    const row = document.createElement("div");
    row.className = "row";
    if (i > 0) {
      row.style.marginLeft += 10 + "px";
    }
    container.appendChild(row);
    for (j = 0; j < cols; j++) {
      const column = document.createElement("div");
      column.className = "cell";
      row.appendChild(column);
      column.addEventListener(
        "mouseenter",
        () => (column.style.backgroundColor = "black")
      );
    }
  }
  //scissorsBtn.addEventListener("click", () => game("scissors"));
}

createGrid(16, 16);
