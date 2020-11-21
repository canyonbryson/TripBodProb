window.onload = function() {
    let cvs = document.querySelector("#canvasForeground");
    let cvsBackground = document.querySelector("#canvasBackground");

    var painter = new Painter(cvs);
    var painterBackground = new Painter(cvsBackground, false);
    painter.addObject(painterBackground);
    painterBackground.addObject(new Background("rgba(0,0,0,0.001)"));
    painter.draw();
    (new Background("black")).draw(painterBackground.ctx);

    var sliders = [document.getElementById("m1"), document.getElementById("m2"), document.getElementById("m3")];
    var masses = [];
    var on = false;
    var clock;
    
    // Update the current slider value (each time you drag the slider handle)
    sliders[0].oninput = function() {
        if (masses.length > 0) {
            masses[0].mass = this.value;
            painter.draw();
        }
    }
    sliders[1].oninput = function() {
        if (masses.length > 1) {
            masses[1].mass = this.value;
            painter.draw();
        }
    }
    sliders[2].oninput = function() {
        if (masses.length > 2) {
            masses[2].mass = this.value;
            painter.draw();
        }
    }

    window.addEventListener("click", function(e) {
        if (masses.length < 3) {
            let mass = new Mass(painter, e.clientX, e.clientY, sliders[masses.length].value, painterBackground);
            sliders[masses.length].parentNode.style.display = "block";
            masses.push(mass);
            painter.addObject(mass);
            painter.draw();
        }
        if (masses.length == 3) {
            document.querySelector("#txtInfo").style.display = "none";
            document.querySelector("#btnRun").style.display = "inline";
        }
    });

    document.querySelector("#btnRun").addEventListener("click", function() {
        on = !on;
        if (on) {
            document.querySelector("#btnRun").innerHTML = "Stop";
            Animate(masses, painter, clock);
        } else {
            document.querySelector("#btnRun").innerHTML = "Run";
            clearInterval(clock);
        }
    });
}

