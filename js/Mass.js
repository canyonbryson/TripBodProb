class Mass {
    constructor(painter, x, y, mass, painterPath) {
        this.x = x;
        this.y = y;
        this.mass = mass;
        this.painter = painter;
        this.path = new Path([this.x, this.y]);
        painterPath.addObject(this.path);
        this.painter.addObject(painterPath);

        draw(ctx) {
            ctx.fillStyle = "blue";
            ctx.strokeStyle = "blue";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.mass, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }
    }
}