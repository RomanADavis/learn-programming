var Paddle = {
  width: 100,
  height: 10,

  new: function() {
    return {
      width: this.width,
      height: this.height,
      x: Game.canvas.width / 2 - this.width / 2,
      y: Game.canvas.height - 100,
      color: "white",

      draw: function() {
        colorRect(this.x, this.y, this.width, this.height, this.color);
      }
    };
  }
};
