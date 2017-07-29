var Game = {
  canvas: null,
  canvasContext: null,
  ball: null,

  draw: function() {
    background.draw();
    this.ball.draw();
  },

  move: function() {
    this.ball.move();
  },

  tick: function() {
    Game.draw();
    Game.move();
  }
};
