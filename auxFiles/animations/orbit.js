new p5(function (k) {
  var toruses = [];
  var ang = 0;
  k.setup = function () {
    k.angleMode(k.DEGREES);
    k.createCanvas(1080, 1080, k.WEBGL);
    k.noStroke();
    
    for(var i=0; i<6; i++){
      var torus = [];
      torus[0] = k.random(0, 360);
      torus[1] = k.random(0, 360);
      torus[2] = k.random(0, 360);
      toruses[i] = torus;
    }

    k.fill(colors[1]);
    k.ellipsoid(150);
    k.fill(colors[0]);
  }

  k.draw = function () {
    k.fill(0);
    k.ellipsoid(150);
    k.fill(127, 255, 0);
    k.background(0);
    k.rotateX(ang);
    k.rotateZ(ang/2);
    k.push();
    for(var i=0; i<6; i++){
      k.rotateX(toruses[i][0]);
      k.rotateY(toruses[i][1]);
      k.rotateZ(toruses[i][2]);
      k.torus(400, 5, 24);
    }
    k.pop();
    ang++;
  }
}, "orbit");