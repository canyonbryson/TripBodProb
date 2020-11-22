class Mass {
    constructor(painter, x, y, mass, painterBackground) {
        this.x = x;
        this.y = y;
        this.mass = mass;
        this.radius = mass * 1.5;
        this.painter = painter;
        this.vector = new Vector(Math.random() * Math.PI * 2, Math.random() * 0.05);
        this.path = new Path([this.x, this.y]);
        painterBackground.addObject(this.path);
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
