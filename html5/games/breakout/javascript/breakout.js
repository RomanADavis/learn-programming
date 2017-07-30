window.onload = function() {
  Game.canvas = document.getElementById("gameCanvas");
  Game.canvasContext = Game.canvas.getContext("2d");
  Game.paddle = Paddle.new();
  Game.ball = Ball.new();
  Game.bricks = Brick.setup();

  background.draw();

  var framesPerSecond = 30;
  setInterval(Game.tick, 1000 / framesPerSecond);

  Game.canvas.addEventListener('mousemove', function(event) {
    mouse.calculatePosition(event);

    var coords = brickCoords(mouse.x, mouse.y);

    mouse.brickX = coords.x;
    mouse.brickY = coords.y;

    Game.paddle.x = mouse.x - Game.paddle.width / 2;
  });
}
