class CharacterController {

  // const adapter = new Adapter()

  // renderAllMazeCharacter() {
  //   adapter.getCharacters().forEach((character) => {
  //     const currentCharacter = new Character(character)
  //     console.log(currentCharacter)
  //   })
  // }

  // Hardcoded
  static renderKevin(maze) {
    const kevin = new Character({maze: maze})
    const kevinPositionEl = maze.getElementAt(kevin.currentCoordinateRow, kevin.currentCoordinateCol)

    const divEl = document.createElement("div")
    divEl.setAttribute("id", "kevin")

    const kevinImg = document.createElement("IMG");
    kevinImg.setAttribute("src", "./media/kevin.jpg");
    kevinImg.setAttribute("width", "100");
    kevinImg.setAttribute("height", "100");

    divEl.appendChild(kevinImg)
    kevinPositionEl.appendChild(divEl)

    setInterval(() => {
      kevin.move()
    }, 100)
  }
}
