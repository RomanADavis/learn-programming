var Game = {
  background: null,

  start: function() {
    Context.initialize("canvas");
    this.background = Background.new("black");

    this.background.draw();
  }
};
