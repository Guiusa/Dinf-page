new p5(function (k) {
    var counter = 0;
    
    k.setup = function () {
        k.angleMode(k.DEGREES);
        k.createCanvas(1080, 1080, k.WEBGL);
        k.background(127, 255, 0);
        k.noStroke();
        k.fill(0);
    }   
    k.draw = function () {
        k.background(127, 255, 0);
        let radius = k.map(k.cos(counter), -1, 1, 400, 0);
        let size = k.map(radius, 400, 0, 150, 20);
        let x = k.cos(counter*5) * radius;
        let y = k.sin(counter*5) * radius;
        k.push();
        k.rotateZ(k.map(radius, 400, 0, 89, 10));
        k.translate(x, y, 0);
        k.rect(0, 0, size, size);
        k.pop();
        counter++;
    }
}, 'drain');