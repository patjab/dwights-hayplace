class MazeController {
  // Interacts with the DOM in index.html to render the display representation
  // of the maze
  static renderMaze(size) {

    const gridContainerEl = document.querySelector(".grid-container")

    // Render the maze
    for ( let row = 0; row < size; row++ ) {
      for ( let col = 0; col < size; col++ ) {
        const divSpotEl = document.createElement("div")
        divSpotEl.setAttribute("class", "grid-item")
        divSpotEl.setAttribute("data-row", row)
        divSpotEl.setAttribute("data-col", col)
        gridContainerEl.appendChild(divSpotEl)

      }
    }
  }
}
