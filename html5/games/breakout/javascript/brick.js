var brick = {
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
  }
};
