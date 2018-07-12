document.addEventListener('DOMContentLoaded', () => {

  let id = 1;

  const adapter = new Adapter()

  adapter.getMaze(id).then((data) => {
    const maze = new Maze(data)
    MazeController.renderMaze(maze.size)

    maze.renderMaze()
    CharacterController.renderKevin(maze)

    const startTime = Date.now()
    let timeout = setTimeout(function() {}, 120 * 1000);

    const timeAllowed = 120000

    setTimeout(() => {
      adapter.getMaze(id).then((data) => {
        console.log(data)
        if (data.finished_time === null ) {
          const gridContainerEl = document.querySelector(".grid-container")
          gridContainerEl.innerHTML = ""
          const videoEl = document.createElement("video")
          videoEl.setAttribute("width", "auto")
          videoEl.setAttribute("height", "auto")
          videoEl.setAttribute("id", "loserVideo")
          videoEl.setAttribute("autoplay", "true")

          const sourceEl = document.createElement("source")
          sourceEl.setAttribute("src", "media/loser.mp4")
          sourceEl.setAttribute("id", "loserVideoSrc")
          sourceEl.setAttribute("type", "video/mp4")
          videoEl.appendChild(sourceEl)
          gridContainerEl.appendChild(videoEl)
        }
      })
    }, timeAllowed);

    const timerEl = document.querySelector(".timer")
    setInterval(() => {
      if (Math.floor((timeAllowed-(Date.now()-startTime))/1000) >= 0) {
        timerEl.innerHTML = `<h1>${Math.floor((timeAllowed-(Date.now()-startTime))/1000)} second remain</h1>`
      }
    }, 500)

    document.addEventListener('keydown', (e) => {
      e.preventDefault()
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
        maze.playerFinish(startTime)
      } else {
        const soundEl = document.createElement("audio")
        soundEl.src = "./media/idiot.mp3"
        document.body.appendChild(soundEl)
        soundEl.play()

      }
    })

  })
})
