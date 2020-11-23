class Arrow {
    constructor(mass) {
        this.mass = mass;
    }

    draw(ctx) {
        let lengthX = this.mass.vector.get_x_component() / 100;
        let lengthY = this.mass.vector.get_y_component() / 100;
        ctx.strokeStyle = "orange";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.mass.x, this.mass.y);
        ctx.lineTo(this.mass.x + lengthX, this.mass.y + lengthY);
        ctx.stroke();
        ctx.closePath();
        ctx.lineWidth = 1;
    }
}