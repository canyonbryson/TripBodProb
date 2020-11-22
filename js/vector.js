class Vector {
    constructor(direction, magnitude) {
        this.direction = direction;
        this.magnitude = magnitude;
    }

    get_x_component() {
        return Math.cos(this.direction) * this.magnitude;
    }

    get_y_component() {
        return -Math.sin(this.direction) * this.magnitude;
    }

    addVector(other) {
        let x = this.get_x_component() + other.get_x_component();
        let y = this.get_y_component() + other.get_y_component();
        let magnitude = checkNaN(Math.sqrt(x ** 2 + y ** 2));
        let direction = checkNaN(calculateAngle(0, 0, x, y));
        return new Vector(direction, magnitude);
    }
}
