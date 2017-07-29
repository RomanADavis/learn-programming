var Ball = {
  x: function() {
    return Game.canvas.width / 2;
  },

  y: function() {
    return Game.canvas.height / 2;
  },

  new: function() {
    return {
      x: Ball.x(),
      y: Ball.y(),
      radius: 10,
      color: "white",
      xSpeed: 5,
      ySpeed: 5,

      draw: function() {
        colorCircle(this.x, this.y, this.radius, this.color);
      },

      move: function() {
        // bounce off bottom & top
        if(this.y + this.radius >= Game.canvas.height || this.y <= this.radius) {
          this.ySpeed *= -1;
        }

        // bounce off left & right
        if(this.x + this.radius >= Game.canvas.width || this.x <= this.radius) {
          this.xSpeed *= -1;
        }

        // bounce off paddle
        if(this.y + this.radius <= Game.paddle.y &&
           this.y + this.radius >= Game.paddle.y + Game.paddle.height &&
           this.x + this.radius >= Game.paddle.x &&
           this.x - this.radius <= Game.paddle.x + Game.paddle.width) {
          this.ySpeed *= -1;
        }

        this.x += this.xSpeed;
        this.y += this.ySpeed;
      }
    };
  }
};
