class MazeController {

  // Interacts with the DOM in index.html to render the display representation
  // of the maze
  static renderMaze() {

    const gridContainerEl = document.querySelector(".grid-container")

    // Render the maze
    for ( let row = 0; row < 10; row++ ) {
      for ( let col = 0; col < 10; col++ ) {
        const divSpotEl = document.createElement("div")
        divSpotEl.setAttribute("class", "grid-item")
        divSpotEl.setAttribute("data-row", row)
        divSpotEl.setAttribute("data-col", col)
        divSpotEl.innerHTML = "----"
        // If somethingExists at the current row, col
        // if (somethingExistsAt({row: row, col: col})) {
        //
        // }

        gridContainerEl.appendChild(divSpotEl)
      }
    }
  }
}
