var Game = {
  background: null,

  initialize: function() {
    this.background = Background.new("black");
    this.wall = Sprite.new("./images/wall.png", false);
    this.crate = Sprite.new("./images/crate.png", false);
    //this.pattern = Sprite.new("./images/wall.png", true);
  },

  tick: function() {
    this.wall.image.onload = function() {
      this.wall.draw(0, 0, 64, 64);
    };


  },

  start: function() {
    Context.initialize("canvas");
    this.background.draw();

    setInterval(this.tick(), 25);
  }
};
