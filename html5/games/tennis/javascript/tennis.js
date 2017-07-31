window.onload = function() {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');
  leftPaddle = Paddle.new(0);
  rightPaddle = Paddle.new(canvas.width - 10);
  ball = Ball.new();

  framesPerSecond = 30;

  setInterval(Game.tick, 1000 / framesPerSecond);

  canvas.addEventListener('mouseclick', Game.reset);

  canvas.addEventListener('mousemove',
          function(evt) {
            var mousePos = calculateMousePosition(evt);
            leftPaddle.y = mousePos.y - leftPaddle.height / 2;
          });
};
