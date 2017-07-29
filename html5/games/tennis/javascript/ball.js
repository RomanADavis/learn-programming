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
        if (ball.x <= ball.radius + leftPaddle.width) {
          // miss
          if(!(ball.y <= leftPaddle.y + leftPaddle.height && ball.y >= leftPaddle.y)) {
            this.reset(rightPaddle);
          } // hit
          // change angle of shot depending on where the ball hits the paddle
          ball.ySpeed = (ball.y - leftPaddle.center()) * .35;
          ball.xSpeed *= -1; // bounce off the left side
        }

        if(ball.x >= (canvas.width - ball.radius)) {
          // miss
          if(!(ball.y <= rightPaddle.y + rightPaddle.height && ball.y >= rightPaddle.y)) {
            this.reset(leftPaddle);
          } // hit
          // change angle of shot depending on where the ball hits the paddle
          ball.ySpeed = (ball.y - rightPaddle.center()) * .35;
          ball.xSpeed *= -1; //bounce off the right side
        }

        // bounce off the bottom and top
        if (ball.y >= (canvas.height - ball. radius) || ball.y <= ball.radius) {
          ball.ySpeed *= -1
        }

        this.x += ball.xSpeed;
        this.y += ball.ySpeed;
      },

      draw: function() {
        colorCircle(ball.x, ball.y, ball.radius, this.color);
      },

      reset: function(paddle) {
        paddle.score += 1;

        if(paddle.score >= WINNING_SCORE) {
          leftPaddle.score = 0;
          rightPaddle.score = 0;
          gameOver = true;
        }

        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
      }
    };
  }
};
