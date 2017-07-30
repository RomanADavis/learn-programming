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
        if(this.visible) {
          colorRect(this.x, this.y, this.width, this.height, "red");
        } // visibility check
      }, // draw function

      break: function() {
        this.visible = false;
      } // break function
    }; // brick object
  },// new

  setup: function() {
    var brick, visible;
    var bricks = [];
    var gap = 2;

    for(j = 0; j < 8; j++) {
      for(var i = 0; i < 8; i++) {
        visible = Math.random()  < 0.5;
        brick = Brick.new(i * (Brick.width + gap), j * (Brick.height + gap), visible);
        bricks.push(brick);
      } // brick row loop
    } // brick wall loop
    return bricks;
  } // setup
};// Brick class
