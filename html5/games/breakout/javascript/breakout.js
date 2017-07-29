window.onload = function() {
  Game.canvas = document.getElementById("gameCanvas");
  Game.canvasContext = Game.canvas.getContext("2d");
  Game.paddle = Paddle.new();
  Game.ball = Ball.new();

  background.draw();

  var framesPerSecond = 30;
  setInterval(Game.tick, 1000 / framesPerSecond);

  Game.canvas.addEventListener('mousemove', function(event) {
    mousePosition = calculateMousePosition(event);
    Game.paddle.x = mousePosition.x - Game.paddle.width / 2;
  });
}
