var Game = {
  canvas: null,
  canvasContext: null,
  ball: null,
  paddle: null,
  bricks: null,

  draw: function() {
    background.draw();
    this.paddle.draw();
    this.ball.draw();

    for(var i=0; i < this.bricks.length; i++){
      this.bricks[i].draw();
    }

    mouse.draw();
  },

  update: function() {
    this.ball.update();
  },

  tick: function() {
    Game.draw();
    Game.update();
  }
};
