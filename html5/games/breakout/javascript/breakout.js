window.onload = function() {
  Game.canvas = document.getElementById("gameCanvas");
  Game.canvasContext = Game.canvas.getContext("2d");
  Game.paddle = Paddle.new();
  Game.ball = Ball.new();
  Game.bricks = [];

  background.draw();

  var framesPerSecond = 30;
  setInterval(Game.tick, 1000 / framesPerSecond);

  Game.canvas.addEventListener('mousemove', function(event) {
    mouse.calculatePosition(event);
    Game.paddle.x = mouse.x - Game.paddle.width / 2;
  });
}
