var mouse = {
  x: null,
  y: null,
  brickX: null,
  brickY: null,

  calculatePosition: function(event) {
    var rect = Game.canvas.getBoundingClientRect();
    var root = document.documentElement;

    mouse.x = event.clientX - rect.left - root.scrollLeft;
    mouse.y = event.clientY - rect.top - root.scrollTop;

    var coords = brickCoords(mouse.x, mouse.y);

    mouse.brickX = coords.x;
    mouse.brickY = coords.y;

    return {x: mouse.x, y: mouse.y};
  },

  draw: function() {
    colorText(this.brickX + "," + this.brickY + ", index: " + brickIndex(this.x, this.y), this.x, this.y, "white");
  }
};
