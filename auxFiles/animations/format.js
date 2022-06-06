new p5(function (k) {
    var counter = 0;
    k.setup = function () {
        k.createCanvas(1080, 1080);
        k.noStroke();
        k.background(colors[1]);
        k.fill(colors[0]);
    }
    k.draw = function () { 
        if(counter%20==0){
            let arr = [k.random(0, 1080), k.random(0, 1080), k.random(0, 1080), k.random(0, 1080), k.random(0, 75), k.random(0, 75), k.random(1, 5)]
            let prob = k.round(k.random(0, 3));
            switch (prob) {
                case 0:
                    k.noStroke();
                    k.rect(arr[0], arr[1], arr[4], arr[5]);
                    break;
                case 1:
                    k.noStroke();
                    k.ellipse(arr[0], arr[1], arr[4], arr[5]);
                    break;
                case 2:
                    k.strokeWeight(arr[6]);
                    k.stroke(colors[0]);
                    k.line(arr[0], arr[1], arr[2], arr[3])
                    break;
                default:
            }
        }
       
        counter++;
    }
}, 'format');