const HayPatch = (function() {
  const all = []
  return class {
    constructor(hayPatch) {
      this.currentCoordinateRow = hayPatch.current_coordinate_row
      this.currentCoordinateCol = hayPatch.current_coordinate_col
      this.mazeId = hayPatch.maze_id // from the belongs_to relationship that HayPatch has
      all.push(this)
    }

    static getAll() {
      return [...all]
    }
  }
})()
