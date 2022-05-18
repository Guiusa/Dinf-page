var i = 0;

function setup() {
  createCanvas(500, 500);
  fill(0, 255, 0);
  noStroke();
}

function draw() {
  background(0);
  ellipse(250, 250, cos(i/100)*500, cos(i/100)*500);
  i++;
}
