var Background = {
  new: function(color) {
    var background = {
      color: color,
      draw: function() {
        Context.rect(0, 0, Context.width, Context.height, "black");
      }
    };

    return background;
  }
};
