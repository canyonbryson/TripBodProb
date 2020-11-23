class Mass {
    constructor(painter, x, y, mass, painterBackground, id) {
        this.x = x;
        this.y = y;
        this.mass = parseInt(mass);
        this.radius = mass * 0.75;
        this.painter = painter;
        this.vector = new Vector(Math.random() * Math.PI * 2, Math.random() * 200);
        // this.vector = new Vector(0, 0);
        this.path = new Path([this.x, this.y]);
        painterBackground.addObject(this.path);
        painter.addObject(new Arrow(this));
    }

    draw(ctx) {
        if (this.id == 0) {
            console.log(this.vector);
        }
        this.path.addPoint([this.x, this.y]);
        ctx.fillStyle = "blue";
        ctx.strokeStyle = "blue";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.mass, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
}
