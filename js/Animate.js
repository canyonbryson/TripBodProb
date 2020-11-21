function Animate(masses, painter, clock) {
    var timestep = 1000;
    clock = setInterval(function() {
        updateVectors(masses);
        updatePosition(masses, timestep);
        painter.draw();
    }, timestep);
}

function updateVectors(masses) {
    var vectors = [];
    for (let i = 0; i < masses.length; i++) {
        let gravityVector = new Vector(0, 0);
        for (let j = 0; j < masses.length; j++) {
            if (i != j) {
                gravityVector = gravityVector.addVector(calculateGravity(masses[i], masses[j]));
            }
        }
        masses[i].vector = masses[i].vector.addVector(gravityVector);
    }
}

function updatePosition(masses, t) {
    //get vector(direction, magnitude)
    //update x, y based on vector and timestep
    for (let i = 0; i < masses.length; i++){
        let m = masses[i];
        let v = m.vector;
        m.x += Math.cos(v[0]) * v[1] * t;
        m.y += Math.sin(v[0]) * v[1] * t;
    }
}

