var Sprite = {
  new: function(filename, is_pattern) {
    var image = new Image();
    image.src = filename;

    var sprite = {
      image: image,
      pattern: pattern,
      TO_RADIANS: Math.PI / 180,

      draw: function(x, y, width, height) {
          if(this.pattern == null) {
            Context.rect(x, y, width, height, this.pattern);
          }

          if(width == undefined || height == undefined){
              this.width = this.image.width;
              this.height = this.image.height;
              Context.image(this.image, x, y, this.image.width,
                                              this.image.height);
          }else{
            this.width = width;
            this.height = height;
            Context.image(this.image, x, y, width, height);
          }
      },

      rotate: function(x, y, angle) {
        Context.context.save();

        Context.context.translate(x, y);
        Context.context.rotate(angle * this.TO_RADIANS);

        Context.image(this.image,
                    -(this.image.width / 2),
                    -(this.image.height / 2));

        Context.context.restore();
      }
    };

    return sprite;
  }
};
