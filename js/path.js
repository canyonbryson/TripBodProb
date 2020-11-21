class Path {
    constructor(point) {
        this.points = [point];
    }

    addPoint(point) {
        this.points.push(point);
    }

    draw(ctx) {
        if (this.points.length > 300){
            this.points.shift();
        }
        if (this.points.length > 1) {

            ctx.beginPath();
            ctx.strokeStyle = "rgba(0,150,0,0.1)";
            ctx.moveTo(this.points[this.points.length - 1][0], this.points[this.points.length - 1][1]);
            // ctx.lineTo(this.points[this.points.length - 1][0], this.points[this.points.length - 1][1]);
            for (let i = 0; i < this.points.length; i++) {
                ctx.lineTo(this.points[i][0], this.points[i][1]);
                ctx.lineTo(this.points[i+1][0], this.points[i+1][1]);
            }
            ctx.stroke();
            ctx.closePath();
        }
    }
}