function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  for (var x = 0.1; x < width-1; x = x + 30) {
    line(x, height/2, mouseX, mouseY);
  }
}
