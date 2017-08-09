var Brick = {
  width: 50,
  height: 25,
  rows: 16,
  columns: 12,
  gap: 2,

  new: function(x, y, visible) {
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

    this.width = Game.canvas.width / this.rows - this.gap;

    for(j = 0; j < this.columns; j++) {

      for(var i = 0; i < this.rows; i++) {
        visible = true; //Math.random()  < 0.5;
        brick = Brick.new(i * (this.width + this.gap), j * (this.height + this.gap), visible);
        bricks.push(brick);
      } // brick row loop

    } // brick wall loop
    return bricks;
  } // setup

};// Brick class
