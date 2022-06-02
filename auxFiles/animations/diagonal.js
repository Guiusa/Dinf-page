new p5(function (k) {
    var vetor;
    var wallPoint;
    var currentPoint
    const pace = 30;
    k.setup = function () {
        let vetorSeed = k.random(0, 2*k.PI);
        let pointSeed = k.round(k.random(0, 1));
        wallPoint = (pointSeed) ? [k.round(k.random(0, 1)) ? 0 : 1080, k.round(k.random(0, 1080))] : [k.round(k.random(0, 1080)), k.round(k.random(0, 1)) ? 0 : 1080];
        vetor = [k.sin(vetorSeed)*pace, k.cos(vetorSeed)*pace];
        
        vetor = [((wallPoint[0] + vetor[0] <= 0 || wallPoint[0] + vetor[0] >= 1080) ? -vetor[0] : vetor [0]), ((wallPoint[1] + vetor[1] <= 0 || wallPoint[1] + vetor[1] >= 1080) ? -vetor[1] : vetor [1])];
        currentPoint = [wallPoint[0] + vetor[0], wallPoint[1] + vetor[1]]; 

        k.createCanvas(1080, 1080);
        k.background(127, 255, 0);
        k.strokeWeight(5);
    };
    k.draw = function () {
        vetor = [((currentPoint[0] <= 0 || currentPoint[0] >= 1080) ? -vetor[0] : vetor [0]), ((currentPoint[1] <= 0 || currentPoint[1] >= 1080) ? -vetor[1] : vetor [1])];
        if((currentPoint[0] <= 0 || currentPoint[0] >= 1080) || (currentPoint[1] <= 0 || currentPoint[1] >= 1080)){
            wallPoint = currentPoint;
        }
        currentPoint = [currentPoint[0] + vetor[0], currentPoint[1] + vetor[1]];
        k.line(wallPoint[0], wallPoint[1], currentPoint[0], currentPoint[1]);
    };
}, "diagonal");