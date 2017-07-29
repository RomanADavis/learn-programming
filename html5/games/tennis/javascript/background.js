var background = {
  color: 'black',

  draw: function() {
    colorRect(0, 0, canvas.width, canvas.height, background.color);
  },

  drawNet: function() {
    for(var i = 0; i < canvas.height; i += 40) {
      colorRect(canvas.width / 2 - 1, i, 2, 20, 'white');
    }
  }
}
