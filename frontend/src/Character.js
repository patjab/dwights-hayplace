class Character {
  constructor(character) {
    this.currentCoordinate = character.currentCoordinate
    this.maze = character.maze // from the belongs_to relationship Character has
  }

  // This method accepts a coordinate object and checks if the move to that
  // coordinate argument is possible from the currentCoordinate the character
  // exists.
  // RETURNS: boolean
  // THINGS THAT MAY PREVENT MOVEMENT:
  // - A position is not on the board
  // - A position is already occupied by a character or an obstacle
  canMoveTo(coordinate) {

  }

  // Uses canMoveTo(coordinate) to check if movement is possible in the north,
  // south, east, west directions (up, down, right, left)
  // Pushes the all of these possible movements to an array and returns that
  // array (i.e. [{row: 0, col:-1}, {row:1, col:0}] indicates a movement of
  // left and down, respectively, are available)
  getAllPossibleMoves() {
    {row: this.currentCoordinate.row+1, col: this.currentCoordinate.col}
    {row: this.currentCoordinate.row, col: this.currentCoordinate.col+1}
    {row: this.currentCoordinate.row+1, col: this.currentCoordinate.col}
    {row: this.currentCoordinate.row, col: this.currentCoordinate.col+1}
  }

  // Checks if the movement exists in the getAllPossibleMoves() array and if it
  // does, the coordinate of the character will change
  move(direction) {

  }

  addToMaze
}
