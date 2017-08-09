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
  },

  pattern: function(image) {
    this.context.createPattern(image, "repeat");
  },

  fillrect: function(x, y, width, height) {
    Context.context.fillrect(x, y, width, height);
  },

  image: function(image, x, y, width, height) {
    this.context.drawImage(image, x, y, width, height);
  },

  save: function() {
    this.context.save();
  },

  translate: function(x, y) {
    this.context.translate(x, y);
  },

};
