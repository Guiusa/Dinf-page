var toruses = [];
var ang = 0;
var K = 500;
function setup() {
  angleMode(DEGREES);
  createCanvas(5000, 5000, WEBGL);
  noStroke();
  
  for(var i=0; i<10; i++){
    var torus = [];
    torus[0] = random(0, 360);
    torus[1] = random(0, 360);
    torus[2] = random(0, 360);
    toruses[i] = torus;
  }

  fill(0);
  ellipsoid(150);
  fill(255, 255, 100);
}

function draw() {
  if(mouseIsPressed){
    K = sin(ang)*700;
  }
  fill(0);
  ellipsoid(K);
  fill(255, 255, 100);
  background(0);
  rotateX(ang);
  rotateZ(ang/2);
  for(var i=0; i<10; i++){
    push();
    rotateX(toruses[i][0]);
    rotateY(toruses[i][1]);
    rotateZ(toruses[i][2]);
    torus(2200, 20, 100);
    pop();
  }
  ang++;
}
