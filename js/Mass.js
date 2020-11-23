class Mass {
    constructor(painter, x, y, mass, painterBackground, id, icon=1) {
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
        this.path = new Path([this.x, this.y]);
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
                let img = document.querySelector("#icon0");
                ctx.drawImage(img, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
        }
    }
}
