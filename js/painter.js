class Painter {
    constructor(cvs, foreground=true) {
        this.cvs = cvs;
        this.cvs.width = window.innerWidth;
        this.cvs.height = window.innerHeight;

        this.ctx = cvs.getContext("2d");
        this.objects = [];
        this.foreground = foreground;
        // this.ctx.fillStyle = "black";
        // this.ctx.strokeStyle = "black";
        // this.ctx.beginPath();
        // this.ctx.Rect(0, 0, this.cvs.width, this.cvs.height);
        // this.ctx.fill();
        // this.ctx.closePath();
        this.draw();
    }

    addObject(obj) {
        this.objects.push(obj);
    }

    draw() {
        if (this.foreground)
            this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
        for (let i = 0; i < this.objects.length; i++) {
            this.objects[i].draw(this.ctx);
        }
        // this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);

    }
}