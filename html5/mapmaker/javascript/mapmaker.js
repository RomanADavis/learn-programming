var canvas, context, ball;
ball = Sprite.new('./sprites/ball.png');

window.onload = function() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  ball.draw();
};
