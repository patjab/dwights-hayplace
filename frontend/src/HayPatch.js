class HayPatch {
  constructor(hayPatch) {
    this.currentCoordinate = hayPatch.currentCoordinate
    this.maze = hayPatch.maze // from the belongs_to relationship that HayPatch has
  }
}
