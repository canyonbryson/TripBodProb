class Vector {
    constructor(direction, magnitude) {
        this.direction = direction;
        this.magnitude = magnitude;
    }

    get_x_component() {
        return Math.cos(this.direction) * this.magnitude;
    }

    get_y_component() {
        return Math.sin(this.direction) * this.magnitude;
    }
}
