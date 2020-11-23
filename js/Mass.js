class Mass {
    constructor(painter, x, y, mass, painterBackground, id, icon) {
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
        switch (icon) {
            case 0: 
                let img = document.querySelector("#icon0");
                ctx.drawImage(img, this.x)
        }
        ctx.fillStyle = "blue";
        ctx.strokeStyle = "blue";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
}
