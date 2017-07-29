var Game = {
  canvas: null,
  canvasContext: null,
  ball: null,
  paddle: null,

  draw: function() {
    background.draw();
    this.paddle.draw();
    this.ball.draw();
    colorText(mouse.x + "," + mouse.x, mouse.x, mouse.y);
  },

  move: function() {
    this.ball.move();
  },

  tick: function() {
    Game.draw();
    Game.move();
  }
};
