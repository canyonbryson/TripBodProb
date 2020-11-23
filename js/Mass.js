class Mass {
    constructor(painter, x, y, mass, painterBackground, id, icon, color) {
        this.icon = icon;
        this.id = id;
        this.x = x;
        this.y = y;
        this.mass = parseInt(mass);
        this.maxMagnitude = 0;
        this.radius = 5 * this.mass / (2 * Math.PI);
        this.painter = painter;
        this.vector = new Vector(0, 0, true); // random initial velocity
        // this.vector = new Vector(0, 0);
        this.color = color;
        this.path = new Path(color, [this.x, this.y]);
        painterBackground.addObject(this.path);
        painter.addObject(new Arrow(this));
    }

    nextIcon() {
        if (this.icon == 2) {
            this.icon = 0;
        } else {
            this.icon++;
        }
    }

    draw(ctx) {
        this.radius = 10 * this.mass / (2 * Math.PI);
        this.path.addPoint([this.x, this.y]);
        switch (this.icon) {
            case 0:
                ctx.fillStyle = "blue";
                ctx.strokeStyle = "blue";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
                break;
            case 1: 
                var grd = ctx.createRadialGradient(this.x, this.y, 1, this.x, this.y, this.radius);
                grd.addColorStop(1, "rgba(0,0,0,0)"); // transparent
                grd.addColorStop(0.91, this.color);
                grd.addColorStop(0.9, "black");
                grd.addColorStop(0, "black");
                ctx.fillStyle = grd;
                ctx.fillRect(this.x - this.radius, this.y - this.radius, this.x + this.radius * 2, this.y + this.radius * 2);
                break;
            case 2:
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.vector.direction);
                ctx.drawImage(document.querySelector("#icon2"), -this.radius, -this.radius, this.radius * 2, this.radius * 2);
                ctx.restore();
        }
    }
}
