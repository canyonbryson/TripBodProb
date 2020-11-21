function Animate (masses, painter) {
    var timestep = .1;
    updateVectors(masses);
    updatePosition(masses, timestep);
    painter.draw();
}

function updateVectors(masses) {
    var vectors = [];
    for (let i = 0; i < masses.length; i++) {
        for (mass in masses) {
            if (masses[i] != mass) {
            vectors.push(calculateGravity(mass, masses[i]));
            masses[i].vector = masses[i].addVector(mass.vector);
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

