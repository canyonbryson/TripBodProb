class Path {
    constructor(point) {
        this.points = [point];
    }

    addPoint(point) {
        this.points.push(point);
    }

    draw(ctx) {
        if (this.points.length > 1000){
            this.points.shift();
        }
        if (this.points.length > 1) {
            ctx.strokeStyle = "rgba(0,150,0,1)";
            for (let i = this.points.length - 1; i > 1; i--) {
                ctx.beginPath();
                ctx.globalAlpha = (i / this.points.length);
                ctx.moveTo(this.points[i - 1][0], this.points[i - 1][1]);
                ctx.lineTo(this.points[i][0], this.points[i][1]);
                ctx.stroke();
                ctx.closePath();
            }

            ctx.globalAlpha = 1;
        }
    }
}