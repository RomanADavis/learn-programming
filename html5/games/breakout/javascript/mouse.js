var mouse = {
  x: null,
  y: null,
  
  calculatePosition: function(event) {
    var rect = Game.canvas.getBoundingClientRect();
    var root = document.documentElement;
    mouse.x = event.clientX - rect.left - root.scrollLeft;
    mouse.y = event.clientY - rect.top - root.scrollTop;
    return {x: mouse.x, y: mouse.y};
  }
}
