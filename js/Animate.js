function updateVectors(masses) {
    for (let i = 0; i < masses.length; i++) {
        for (let j = 0; j < masses.length; j++) {
            if (i != j) {
                let vector = calculateGravity(masses[i], masses[j]);
                masses[i].vector = masses[i].vector.addVector(vector);
            }
        }
    }
}

function updatePosition(masses, t) {
    //get vector(direction, magnitude)
    //update x, y based on vector and timestep
    for (let i = 0; i < masses.length; i++){
        let m = masses[i];
        let v = m.vector;
        m.x += v.get_x_component() * t / 1000;
        m.y += v.get_y_component() * t / 1000;
    }
}



