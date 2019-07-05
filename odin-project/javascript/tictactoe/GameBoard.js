const GameBoard = {
  player: 'X',
  'X': 'X',
  'O': 'O',

  reset: () => {
    GameBoard.contents = [['', '', ''], 
                          ['', '', ''], 
                          ['', '', '']]
    GameBoard.tied = false
    GameBoard.won = false
    GameBoard.togglePlayer()
  },

  togglePlayer: () => {
    GameBoard.player = GameBoard.player === 'X' ? 'O' : 'X'
    GameBoard.error = `${GameBoard[GameBoard.player]}'s Turn`
  },

  render: () => {
    const error = `<div id='error'>${GameBoard.error}</div>`
    const board = `<div id='game-board'>
    ${GameBoard.contents.map((row, y) => {
      return row.map((content, x) => {
        return `<div class='box' id='col-${y}-row-${x}' onclick='place("${x}","${y}")'>${content}</div>`
      }).join('')
    }).join('')}
    </div>`

    console.log
    return (
      `<div>
        ${error}
        ${board}
      </div>`
    )
  },

  click: (x, y) => {
    if(GameBoard.contents[y][x] === ''){
      GameBoard.contents[y][x] = GameBoard.player
      GameBoard.togglePlayer()
      if((GameBoard.won = GameBoard.winner()) || (GameBoard.tied = GameBoard.tie())){
        GameBoard.endGame()
      }
    }else{
      GameBoard.error = 'Click on an empty square'
    }
  },

  winner: () => {
    const isWinningStreak = (streak) => { // private function
      let first = streak[0]
      if(first === ''){
        return false
      }
      if(streak.every(square => square === first)){
        return first
      }
      return false
    }

    contents = GameBoard.contents
    for(let y = 0; y < contents.length; y++){ // rows
      let row = contents[y]
      if(isWinningStreak(row)){
        return first
      }
    }

    for(let x = 0; x < contents.length; x++){ // columns
      let column = contents.map(row => row[x])
      if(isWinningStreak(column)){
        return first
      }
    }

    // diagonals
    let first = contents[0][0], second = contents[1][1], third = contents[2][2]
    if(isWinningStreak([first, second, third])){
      return first
    }
    first = contents[0][2], third = contents[2][0] // seconds is the same
    if(isWinningStreak([first, second, third])){
      return first
    }

    return false
  },

  tie: () => {
    for(let y = 0; y < GameBoard.contents.length; y++){
      if(GameBoard.contents[y].some(content => content === '')){
        return false
      }
    }
    return true
  },

  endGame: () => {
    GameBoard.error = GameBoard.tied ? "Cat's Game" : `${GameBoard.won} won`
  }
}