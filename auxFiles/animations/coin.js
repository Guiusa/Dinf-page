new p5(function (k) {
    var counter = 0;
    k.setup = function () {
        k.createCanvas(1080, 1080, k.WEBGL);
        k.background(127, 255, 0);
        k.angleMode(k.DEGREES);
        k.noStroke();
        k.fill(colors[1]);
    };
    k.draw = function () {
        k.background(colors[0]);
        let size = k.map(k.cos(counter/10), -1, 1, 150, 350);
        k.rotateX(counter);
        k.rotateY(1.5*counter);
        k.cylinder(size, 30, 24);
        counter++;
    };

}, 'coin');