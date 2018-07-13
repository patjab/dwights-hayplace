const MazeController = (function() {
  return class {
    static renderMaze(size) {
      const gridContainerEl = document.querySelector(".grid-container")
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
})()
