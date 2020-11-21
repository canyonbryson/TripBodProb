function Animate(masses, painter, clock) {
    var timestep = 10;
    clock = setInterval(function() {
        updateVectors(masses);
        updatePosition(masses, timestep);
        painter.draw();
    }, timestep);
}

function updateVectors(masses) {
    var vectors = [];
    for (let i = 0; i < masses.length; i++) {
        for (mass in masses) {
            if (masses[i] != mass) {
            vectors.push(calculateGravity(mass, masses[i]));
            masses[i].vector = addVectors(masses[i].vector, mass.vector)
            }
        } //get a velocity vector for each mass
    }
}

function updatePosition(masses, timestep) {
    //get vector(direction, magnitude)
    //update x, y based on vector and timestep
}

