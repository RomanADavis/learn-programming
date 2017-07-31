var Game = {
  canvas: null,
  canvasContext: null,
  ball: null,
  paddle: null,
  bricks: null,
  framesPerSecond: 30,

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
  },

  start: function() {
    Game.canvas = document.getElementById("gameCanvas");
    Game.canvasContext = Game.canvas.getContext("2d");
    Game.paddle = Paddle.new();
    Game.ball = Ball.new();
    Game.bricks = Brick.setup();

    background.draw();

    setInterval(Game.tick, 1000 / this.framesPerSecond);

    Game.canvas.addEventListener('mousemove', function(event) {
      mouse.calculatePosition(event);

      Game.paddle.x = mouse.x - Game.paddle.width / 2;
    });
  }
};
