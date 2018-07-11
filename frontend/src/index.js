document.addEventListener('DOMContentLoaded', () => {

  const adapter = new Adapter()
  MazeController.renderMaze()
  adapter.getMaze().then((data) => {
    const maze = new Maze(data)
    maze.renderMaze()

    document.addEventListener('keydown', (e) => {

      let coordinate;
      if ( e.key === "ArrowLeft" ) {
        coordinate = {row: maze.playersCurrentRow, col: maze.playersCurrentCol-1}
      } else if ( e.key === "ArrowRight" ) {
        coordinate = {row: maze.playersCurrentRow, col: maze.playersCurrentCol+1}
      } else if ( e.key === "ArrowUp" ) {
        coordinate = {row: maze.playersCurrentRow-1, col: maze.playersCurrentCol}
      } else if ( e.key === "ArrowDown" ) {
        coordinate = {row: maze.playersCurrentRow+1, col: maze.playersCurrentCol}
      }
      if (maze.nothingExistsAt(coordinate) && maze.staysInMaze(coordinate)) {
        const oldPlayerPositionDivEl = document.querySelector("#player")
        oldPlayerPositionDivEl.parentNode.removeChild(oldPlayerPositionDivEl)

        maze.playersCurrentRow = coordinate.row
        maze.playersCurrentCol = coordinate.col

        maze.renderPlayer()
      } else {
        console.log("IDIOT")
      }


      // console.log(e.key)

    })

  })





  // .then((data) => {
  //   data.forEach((hayPatch)=>{
  //     new HayPatch(hayPatch)
  //   })
  //   HayPatch.getAll().forEach((hayPatch) => {
  //     const hayPatchDivEl = document.querySelector(`[data-row='${hayPatch.currentCoordinateRow}'][data-col='${hayPatch.currentCoordinateCol}']`)
  //     hayPatchDivEl.className += " " + "patchStyle"
  //   })
  // })



  // // For listening to up, down, left, right
  // document.addEventListener('keypress', (e) => {
  //   // if left
  //   //  move left
  //   // if right
  //   //  move right
  //   // if up
  //   //  move up
  //   // if down
  //   //  move down
  // })
})
