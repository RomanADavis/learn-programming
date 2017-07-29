var background = {
  color: 'black',

  draw: function() {
    colorRect(0, 0, canvas.width, canvas.height, background.color);
  },

  drawNet: function() {
    for(var i = 0; i < canvas.height; i += 40) {
      colorRect(canvas.width / 2 - 1, i, 2, 20, 'white');
    }
  },

  drawScores: function() {
    canvasContext.fillText(leftPaddle.score, 100, 100);
    canvasContext.fillText(rightPaddle.score, canvas.width - 100, 100)
  }
}
