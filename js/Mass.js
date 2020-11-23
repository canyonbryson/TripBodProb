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
        this.vector = new Vector(Math.random() * Math.PI * 2, Math.random() * 10000);
        // this.vector = new Vector(0, 0);
        this.color = color;
        this.path = new Path(color, [this.x, this.y]);
        painterBackground.addObject(this.path);
        painter.addObject(new Arrow(this));
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
                // let img = document.querySelector("#icon0");
                // ctx.drawImage(img, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
                var grd = ctx.createRadialGradient(this.x, this.y, 1, this.x, this.y, this.radius);
                grd.addColorStop(1, "rgba(0,0,0,0)");
                grd.addColorStop(0.95, "rgba(0,0,0,0)");
                grd.addColorStop(0.9, "black");
                grd.addColorStop(0.8, this.color);
                grd.addColorStop(0.8, "black");
                grd.addColorStop(0, "black");
                ctx.fillStyle = grd;
                ctx.fillRect(this.x - this.radius, this.y - this.radius, this.x + this.radius * 2, this.y + this.radius * 2);
                // ctx.fillRect(0, 0, this.radius * 2, this.radius * 2);
        }
    }
}
