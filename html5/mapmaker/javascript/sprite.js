var Sprite = {
  new: function(image_source, x, y)	{
    if(x == undefined) {
      x = 0;
    }

    if (y == undefined) {
      y = 0;
    }

    var sprite = {
      x: x,
      y: y,

      draw: function() {
        context.drawImage(this.image, this.x, this.y, this.image.width, this.image.height);
      }
    };

    sprite.image = new Image();

    //sprite.image.onload = sprite.draw();

    sprite.image.src = image_source;

    return sprite;
  }
};
