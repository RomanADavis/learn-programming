Ball = {
  new: function() {
    return {
      x: 400, // needs to be set away from the edge so it doesn't "bounce" off the
      y: 300, // screen.
      radius: 10,
      xSpeed: 5,
      ySpeed: 5,
      color: 'red',

      move: function() {
        if (this.x <= this.radius + leftPaddle.width) {
          // miss
          if(!(this.y <= leftPaddle.y + leftPaddle.height && this.y >= leftPaddle.y)) {
            this.reset(rightPaddle);
          } // hit
          // change angle of shot depending on where the this hits the paddle
          this.ySpeed = (this.y - leftPaddle.center()) * 0.35;
          this.xSpeed *= -1; // bounce off the left side
        }

        if(this.x >= (canvas.width - this.radius)) {
          // miss
          if(!(this.y <= rightPaddle.y + rightPaddle.height && this.y >= rightPaddle.y)) {
            this.reset(leftPaddle);
          } // hit
          // change angle of shot depending on where the this hits the paddle
          this.ySpeed = (this.y - rightPaddle.center()) * 0.35;
          this.xSpeed *= -1; //bounce off the right side
        }

        // bounce off the bottom and top
        if (this.y >= (canvas.height - this.radius) || this.y <= this.radius) {
          this.ySpeed *= -1;
        }

        this.x += this.xSpeed;
        this.y += this.ySpeed;
      },

      draw: function() {
        colorCircle(this.x, this.y, this.radius, this.color);
      },

      reset: function(paddle) {
        paddle.score += 1;

        if(paddle.score >= Game.winningScore) {
          leftPaddle.score = 0;
          rightPaddle.score = 0;
          Game.over = true;
        }

        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
      }
    };
  }
};
