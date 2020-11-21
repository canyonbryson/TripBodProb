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
        for (let j = 0; j < masses.length; j++) {
            if (i != j) {
                vectors.push(calculateGravity(masses[j], masses[i]));
                masses[i].vector = masses[i].vector.addVector(masses[j].vector);
            }
        } //get a velocity vector for each mass
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

