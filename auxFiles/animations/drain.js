new p5(function (k) {
    //import { colors } from "../styles/colors.js";      
    var counter = 0;
    var rotRect = 0;
    k.setup = function () {
        k.angleMode(k.DEGREES);
        k.createCanvas(1080, 1080, k.WEBGL);
        k.background(colors[0]);
        k.noStroke();
        k.fill(colors[1]);
    }   
    k.draw = function () {
        k.background(colors[0]);
        let radius = k.map(k.cos(counter), -1, 1, 400, 0);
        rotRect += k.map(radius, 400, 0, 5, 7);
        let size = k.map(radius, 400, 0, 150, 20);
        let x = k.cos(counter*5) * radius;
        let y = k.sin(counter*5) * radius;
        k.push();
        k.translate(x, y, 0);
        k.rotateZ(rotRect);
        k.box(size, size, 1);
        k.pop();
        counter++;
    }
}, 'drain');