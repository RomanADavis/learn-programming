Paddle = {
  width: 10,
  height: 100,

  new: function(x) {
    return {
      score: 0,
      x: x,
      y: (canvas.height / 2) - (this.height / 2), // center
      width: this.width,
      height: this.height,
      color: 'white',
      draw: function() {
        colorRect(this.x, this.y, this.width, this.height, this.color);
      },

      auto: function() {
        if ((this.center() + 35) > ball.y) {
          this.y -= 6;
        } else if((this.center() - 35) < ball.y) {
          this.y += 6;
        }
      },

      bottom: function() {
        return this.y + this.height;
      },

      center: function() {
        return this.y + (this.height / 2);
      }
    }
  }
}
