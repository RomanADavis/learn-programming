function colorRect(leftX, topY, rightX, bottomY, color) {
  Game.canvasContext.fillStyle = color;
  Game.canvasContext.fillRect(leftX, topY, rightX, bottomY);
}

function colorCircle(centerX, centerY, radius, color) {
  Game.canvasContext.fillStyle = color;
  Game.canvasContext.beginPath();
  Game.canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, color);
  Game.canvasContext.fill();
}

function colorText(text, x, y, color) {
  Game.canvasContext.fillStyle = color;
  Game.canvasContext.fillText(text, x, y);
}

function brickCoords(x, y) {
  var real_height = Brick.height + Brick.gap;
  var real_width = Brick.width + Brick.gap;
  x = Math.floor(x  / real_width);
  y = Math.floor(y / real_height);

  return {x: x, y: y};
}

function coordsToIndex(brickCoords) {
  index = brickCoords.y * Brick.rows + brickCoords.x;

  return index;
}

function brickIndex(x, y) {
  return coordsToIndex(brickCoords(x, y));
}
