var canvas;
var canvasContext;
var leftPaddle;
var rightPaddle;
var gameOver = false;
var ball = Ball.new();

const WINNING_SCORE = 3;

function gameReset() {
  if(gameOver){
    leftPaddle.score = 0;
    rightPaddle.score = 0;
    gameOver = false;
  }
}

window.onload = function() {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');
  leftPaddle = Paddle.new(0);
  rightPaddle = Paddle.new(canvas.width - 10)

  var framesPerSecond = 30;

  setInterval(tick, 1000 / framesPerSecond);

  canvas.addEventListener('mouseclick', gameReset);

  canvas.addEventListener('mousemove',
          function(evt) {
            var mousePos = calculateMousePosition(evt);
            leftPaddle.y = mousePos.y - leftPaddle.height / 2;
          });
}

function tick() {
  move();
  draw();
}

function move() {
  ball.move();
  rightPaddle.auto();
}

function draw() {
  background.draw();
  background.drawNet();

  if (gameOver) {
    canvasContext.fillStyle = 'white';
    canvasContext.fillText("Click to Continue", 100, 100);
    return;
  }

  ball.draw();
  leftPaddle.draw();
  rightPaddle.draw();

  canvasContext.fillText(leftPaddle.score, 100, 100);
  canvasContext.fillText(rightPaddle.score, canvas.width - 100, 100)
}
