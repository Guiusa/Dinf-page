new p5(function (k) {
    var counter = 0;
    k.setup = function () {
        k.createCanvas(1080, 1080);
        k.noStroke();
        k.fill(colors[0]);
    };
    k.draw = function () {
        k.background(colors[1]);
        k.rect(360, 1065, 360, 15);
        let pos = k.map(k.sin(counter/60), 1, -1, 200, 1030);
        let somar = k.map(pos, 200, 1030, 1, 5);
        if(pos<800){
            k.ellipse(540, pos, k.map(pos, 800, 200, 300, 200), 300);
        }
        else if(pos>930){
            k.ellipse(540, pos, 300, 300-2*(pos-930));
        }
        else{
            k.ellipse(540, pos, 300, 300);
        }
        counter+=somar;
    };
}, "bounce");