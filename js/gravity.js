const G = 6.67E-11;

function calculateGravity(mass1, mass2) {
    let magnitude = (G * mass1.mass * mass2.mass) / calculateDistance(mass1, mass2);
    let direction = calculateAngle(mass1.x, mass2.x, mass1.y, mass2.y);
    return new Vector(direction, magnitude);
}

function calculateDistance(mass1, mass2) {
    let xDist = mass1.x - mass2.x;
    let yDist = mass1.y - mass2.y;
    return Math.sqrt(xDist ** 2 + yDist ** 2);
}

function calculateAngle(x1, y1, x2, y2) { 
    let xDist = x1 - x2;
    let yDist = y1 - y2;
    let dist = Math.sqrt(xDist ** 2 + yDist ** 2);
    let theta = Math.asin(yDist / dist);

    if ((xDist < 0 && yDist > 0) || (xDist < 0 && yDist < 0)) { q = 2; theta = (Math.PI) + (theta * (-1)); } // quadrant II or III
    if (xDist > 0 && yDist < 0) { theta = 2 * Math.PI + theta; q = 4; } // quadrant IV
    if (yDist === 0 && xDist < 0) { theta = Math.PI; }
    if (xDist === 0 && yDist > 0) { theta = Math.PI / 2; }
    if (xDist === 0 && yDist < 0) { theta = Math.PI * 1.5; }
    if (yDist === 0 && xDist > 0) { theta = 0; }
    if (theta < 0) { theta += Math.PI * 2; }
    if (theta > Math.PI * 2) { theta -= Math.PI * 2; }

    return theta;
}
