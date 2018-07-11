document.addEventListener('DOMContentLoaded', () => {

  const adapter = new Adapter()
  MazeController.renderMaze()
  adapter.getMaze().then((data) => {
    const maze = new Maze(data)
    maze.renderMazeAs2DArray()
    maze.renderHayPatches()
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
