class Maze {
  constructor(maze) {
    //this.sideLength = maze.sideLength // this is the length of one side of the square maze
    this.characters = maze.characters // from the has_many relationships that Maze has
    this.hayPatches = maze.hay_patches // from the has_many relationships that Maze has
    this.size = maze.size
    this.playersCurrentRow = maze.players_current_row
    this.playersCurrentCol = maze.players_current_col
    this.finishRow = maze.maze_finish_row
    this.finishCol = maze.maze_finish_col
  }

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
      const hayPic = document.createElement("IMG");
      hayPic.setAttribute("src", "./media/hay.png");
      hayPic.setAttribute("width", "100%");
      hayPic.setAttribute("height", "100%");
      hayPatchDivEl.append(hayPic)
    })
  }

  renderPlayer() {
    const playerEl = this.getElementAt(this.playersCurrentRow, this.playersCurrentCol)
    const playerDivEl = document.createElement("div")
    playerDivEl.setAttribute("id", "player")
    // const playerTextEl = document.createTextNode("DWIGHT")


    const dwightPlayer = document.createElement("IMG");
    dwightPlayer.setAttribute("src", "./media/dwight.jpg");
    dwightPlayer.setAttribute("width", "100%");
    dwightPlayer.setAttribute("height", "100%");
    playerDivEl.append(dwightPlayer)
    playerEl.append(playerDivEl)
  }

  // Uses renderMazeAs2DArray to determine if a character exists at the given
  // coordinate
  characterExistsAt(coordinate) {

        return false
  }

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

  playerFinish() {
    if ((this.playersCurrentRow===this.finishRow) && (this.playersCurrentCol===this.finishCol)) {
      document.querySelector('.grid-container').innerHTML = 'is Hay King'
      const audioEl = document.querySelector('audio')
      audioEl.parentNode.removeChild(audioEl)
      const soundEl = document.createElement("audio")
      soundEl.src = "./media/hayking.mp3"
      document.body.appendChild(soundEl)
      soundEl.play()
    }
  }




}
