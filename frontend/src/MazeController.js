class MazeController {
  // Interacts with the DOM in index.html to render the display representation
  // of the maze
  static renderMaze() {

    const gridContainerEl = document.querySelector(".grid-container")

    // Render the maze
    for ( let row = 0; row < 6; row++ ) {
      for ( let col = 0; col < 6; col++ ) {
        const divSpotEl = document.createElement("div")
        divSpotEl.setAttribute("class", "grid-item")
        divSpotEl.setAttribute("data-row", row)
        divSpotEl.setAttribute("data-col", col)
        // divSpotEl.innerHTML = `(${row}, ${col})`

        // if (somethingExistsAt({row: row, col: col})) {
        // divSpotEl.innerHTML = "HAYPATCH"
        // }

        gridContainerEl.appendChild(divSpotEl)

      }
    }
  }
}
