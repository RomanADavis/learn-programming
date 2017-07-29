Game = {
  over: false,
  winningScore: 3,

  move: function() {
    ball.move();
    rightPaddle.auto();
  },

  draw: function() {
    background.draw();

    if (Game.over) {
      canvasContext.fillStyle = 'white';
      canvasContext.fillText("Click to Continue", 100, 100);
      return;
    }

    background.drawNet();
    ball.draw();
    leftPaddle.draw();
    rightPaddle.draw();
  },

  reset: function() {
    if(gameOver){
      this.leftPaddle.score = 0;
      this.rightPaddle.score = 0;
      this.gameOver = false;
    }
  },

  tick: function() {
    Game.move();
    Game.draw();
  }
};
