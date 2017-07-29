window.onload = function() {
  Game.canvas = document.getElementById("gameCanvas");
  Game.canvasContext = Game.canvas.getContext("2d");
  Game.ball = Ball.new();

  background.draw();

  var framesPerSecond = 30;
  setInterval(Game.tick, 1000 / framesPerSecond);
}
