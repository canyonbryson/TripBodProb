class Mass {
    constructor(painter, x, y, mass, painterPath) {
        this.x = x;
        this.y = y;
        this.mass = mass;
        this.radius = mass * 1.5;
        this.painter = painter;
        
        this.path = new Path([this.x, this.y]);
        painterPath.addObject(this.path);
        this.painter.addObject(painterPath);
    }
}
