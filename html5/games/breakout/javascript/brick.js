var Brick = {
  width: 100,
  height: 50,

  new: function(x, y, visible = true) {
    return {
      width: this.width,
      height: this.height,
      x: x,
      y: y,
      visible: visible,

      draw: function() {
        colorRect(this.x, this.y, this.width, this.height, "red");
      },

      break: function() {
        this.visible = false;
      }
    };
  },

  setup: function() {
    var bricks = [];

    var gap = 2;

    for(j = 0; j < 1; j++) {
      for(var i = 0; i < 8; i++) {
        brick = Brick.new(i * (Brick.width + gap), j * (Brick.height + gap), true);
        bricks.push(brick);
      }
    }
    return bricks;
  }
};
