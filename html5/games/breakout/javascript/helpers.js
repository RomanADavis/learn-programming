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
