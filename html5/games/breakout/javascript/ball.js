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
      brickColumn: brickCoords(Ball.x(), Ball.y()).x,
      brickRow: brickCoords(Ball.x(), Ball.y()).y,

      draw: function() {
        colorCircle(this.x, this.y, this.radius, this.color);
      },

      update: function() {
        this.handle_bricks();
        this.handle_walls();
        this.handle_paddle();

        this.move();
      }, // move function

      reset: function() {
        this.x = Ball.x();
        this.y = Ball.y();
      }, // reset function

      handle_bricks: function() {
        var index = brickIndex(this.x, this.y);

        if (index >= 0 && index < Game.bricks.length) {
          if (Game.bricks[index].visible) {
            Game.bricks[index].break();

            var previousCoords = brickCoords(this.x -this.xSpeed, this.y - this.ySpeed);

            if(previousCoords.y != this.brickColumn) {
              this.ySpeed *= -1; // bounce
            }
            if(previousCoords.x != this.brickRow) {
              this.xSpeed *= -1; // bounce
            }
          }
        }
      },// handles bricks

      handle_walls: function() {
        // bounce off bottom & top
        if(this.y + this.radius >= Game.canvas.height) {
          if(this.x + this.radius >= Game.paddle.x && this.x - this.radius <= Game.paddle.x + Game.paddle.width){
            this.ySpeed *= -1;
          }else{
            this.reset();
          }
        }

        if(this.y <= this.radius){
          this.ySpeed *= -1;
        }

        // bounce off left & right
        if(this.x + this.radius >= Game.canvas.width || this.x <= this.radius) {
          this.xSpeed *= -1;
        }
      },// handle walls,

      handle_paddle: function() {
        // bounce off paddle
        if(this.y + this.radius >= Game.paddle.y &&
           this.y - this.radius <= Game.paddle.y &&
           this.x + this.radius >= Game.paddle.x &&
           this.x - this.radius <= Game.paddle.x + Game.paddle.width) {

          // More extreme angles the farther away from the center of the paddle
          var delta = Math.abs(Game.paddle.center() - this.x);
          // Maintain horizontal momentum
          delta = this.xSpeed > 0 ? delta : delta * -1;

          this.xSpeed = (delta) * 0.35;

          this.ySpeed *= -1;
        }
      },

      move: function() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        var coords = brickCoords(this.x, this.y);
        this.brickRow = coords.y;
        this.brickColumn = coords.x;
      },
    }; // ball object
  } // new
}; // Ball class
