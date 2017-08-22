var canvas, context, ball;

var Game = {
  go: function() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    ball.draw();
  },

  initialize : function() {
    ball = Sprite.new('./sprites/ball.png');

    window.onload = function() {
      Game.go();
    };
  },

  start: function() {
    this.initialize();
  }
};
