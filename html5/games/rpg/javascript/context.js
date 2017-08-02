var Context = {
  canvas: null,
  context: null,

  initialize: function(id) {
    this.canvas = document.getElementById(id);
    this.context = this.canvas.getContext("2d");
    this.width = this.canvas.width;
    this.height = this.canvas.height;

    return this.context;
  },

  rect: function(left, top, right, bottom, color) {
    this.context.beginPath();
    this.context.rect(left, top, right, bottom);
    this.context.fillStyle = color;
    this.context.fill();
  }
};
