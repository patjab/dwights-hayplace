class Maze {
  constructor(maze) {
    //this.sideLength = maze.sideLength // this is the length of one side of the square maze
    this.characters = maze.characters // from the has_many relationships that Maze has
    this.hayPatches = maze.hay_patches // from the has_many relationships that Maze has
    this.size = maze.size
    this.playersCurrentRow = maze.players_current_row
    this.playersCurrentCol = maze.players_current_col
  }

  // Goes through all the characters and the hayPatches in the given JSON and
  // assembles a two dimensional array with references to characters and hayPatches
  // inside the appropriate array slot
  // renderMazeAsTwoDArray() {
  //   const mazeArray = []
  //   for (let i = 0; i < 6; i++) {
  //     mazeArray.push(new Array(6))
  //   }
  //   this.hayPatches.forEach((hayPatch) => {
  //     const currentHayPatch = new HayPatch(hayPatch)
  //     mazeArray[currentHayPatch.currentCoordinateRow][currentHayPatch.currentCoordinateCol] = "hay patch here"
  //   })
  //
  //   return mazeArray
  // }

  getElementAt(row, col) {
    return document.querySelector(`[data-row='${row}'][data-col='${col}']`)
  }

  renderMaze() {
    this.renderHayPatches()
    this.renderPlayer()
  }

  renderHayPatches() {
    this.hayPatches.forEach((hayPatch) => {
      const hayPatchObj = new HayPatch(hayPatch)
      const hayPatchDivEl = this.getElementAt(hayPatchObj.currentCoordinateRow, hayPatchObj.currentCoordinateCol)
      hayPatchDivEl.className += " " + "patchStyle"
    })
  }

  renderPlayer() {
    const playerEl = this.getElementAt(this.playersCurrentRow, this.playersCurrentCol)
    const playerDivEl = document.createElement("div")
    playerDivEl.setAttribute("id", "player")
    const playerTextEl = document.createTextNode("DWIGHT")
    playerDivEl.append(playerTextEl)
    playerEl.append(playerDivEl)
  }

  // Uses renderMazeAs2DArray to determine if a character exists at the given
  // coordinate
  characterExistsAt(coordinate) {

        return false
  }

  // Uses renderMazeAs2DArray to determine if a character exists at the given
  // coordinate
  hayPatchesCoordinateArray() {
    return this.hayPatches.map((hayPatch)=>{
      const hayPatchObj = new HayPatch(hayPatch)
      return {row: hayPatchObj.currentCoordinateRow, col: hayPatchObj.currentCoordinateCol}
    })
  }

  nothingExistsAt(inputCoordinate) {
    return !(this.hayPatchesCoordinateArray().find((coordinate) => {
      return ((coordinate.row === inputCoordinate.row) && (coordinate.col === inputCoordinate.col))
    }))
  }

  staysInMaze(inputCoordinate) {
    return ((inputCoordinate.row >= 0) && (inputCoordinate.row < this.size)
    && (inputCoordinate.col >= 0) && (inputCoordinate.col < this.size))
  }

  // Returns whatever exists at the given coordinate
  componentAt(coordinate) {
    return renderMazeAs2DArray()[row][col]
  }

  // Gets all the spots which are not occupied
  allUnoccupiedPositions() {
    const unoccupiedPositions = []
    for (let row = 0; row < this.size; row++ ) {
      for (let col = 0; col < this.size; col++ ) {
        somethingExistsAt({row: row, col: col}) ? null: unoccupiedPositions.push({row: row, col: col})
      }
    }
    return unoccupiedPositions
  }



}
