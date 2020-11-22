class Path {
    constructor(point) {
        this.points = [point];
    }

    addPoint(point) {
        this.points.push(point);
    }

    draw(ctx) {
        if (this.points.length > 2){
            this.points.shift();
        }
        if (this.points.length > 1) {
            ctx.beginPath();
            ctx.strokeStyle = "rgba(0,150,0,1)";
            ctx.moveTo(this.points[0][0], this.points[0][1]);
            ctx.lineTo(this.points[1][0], this.points[1][1]);
            ctx.stroke();
            ctx.closePath();
        }
    }
}