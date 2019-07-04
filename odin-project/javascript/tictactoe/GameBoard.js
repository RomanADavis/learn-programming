const GameBoard = {
  contents: [
    ['', '', ''], 
    ['', '', ''], 
    ['', '', '']
  ],

  player: 'X',

  togglePlayer: () => {
    GameBoard.player = GameBoard.player === 'X' ? 'O' : 'X'
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
      if(GameBoard.won = GameBoard.winner()){
        GameBoard.endGame()
      }
    }else{
      GameBoard.error = 'Click on an empty square'
    }
  },

  winner: () => {
    contents = GameBoard.contents
    for(let y = 0; y < contents.length; y++){ // rows
      let row = contents[y]
      let first = row[0]
      if(first === ''){
        continue
      }
      if(row.every(square => square === first)){
        return first
      }
    }

    for(let x = 0; x < contents.length; x++){ // columns
      let first = contents[0][x], second = contents[1][x], third = contents[2][x]
      if(first === ''){
        continue
      }
      let column = [first, second, third]
      if(column.every(square => square === first)){
        return first
      }
    }

    // diagonals
    let first = contents[0][0], second = contents[1][1], third = contents[2][2]
    if(second === ''){
      return false
    }
    if(first === second && first === third){
      return first
    }
    first = contents[0][2], third = contents[2][0] // seconds is the same
    if(first === second && first === third){
      return first
    }

    return false
  },

  won: false, 

  endGame: () => {
    GameBoard.error = `${GameBoard.won} won`
  },

  error: 'All Good' 
}