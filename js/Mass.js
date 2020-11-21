class Mass {
    constructor(painter, x, y, mass) {
        this.x = x;
        this.y = y;
        this.mass = mass;
        this.radius = mass * 1.5;
        this.painter = painter;

        this.path = new Path([this.x, this.y]);
        this.painter.addObject(this.path);
    }

    draw(ctx) {
        this.path.addPoint([this.x, this.y]);
        ctx.fillStyle = "blue";
        ctx.strokeStyle = "blue";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.mass, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
}
