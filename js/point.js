class Point {
    constructor(masses){
        this.x = 0;
        this.y = 0;
        this.masses = masses;
    }
    draw(ctx){
        let coords = getCenterOfMass(this.masses);
        this.x = coords[0];
        this.y = coords[1];
        ctx.fillStyle = "white";
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
}