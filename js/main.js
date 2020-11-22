window.onload = function() {
    let cvs = document.querySelector("#canvasForeground");
    let cvsBackground = document.querySelector("#canvasBackground");

    var painter = new Painter(cvs);
    var painterBackground = new Painter(cvsBackground, true);
    painter.addObject(painterBackground);
    painterBackground.addObject(new Background("black", 1));
    painter.draw();
    (new Background("black", 1.0)).draw(painterBackground.ctx);

    var sliders = [document.getElementById("m1"), document.getElementById("m2"), document.getElementById("m3")];
    var masses = [];
    var on = false;
    var clock;
    
    // Update the current slider value (each time you drag the slider handle)
    for (let i = 0; i < 3; i++) {
        sliders[i].oninput = function() {
            if (masses.length > i) {
                masses[i].mass = parseInt(this.value);
                painter.draw();
            }
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
            painter.addObject(new Point(masses));
        }
    });

    document.querySelector("#btnRun").addEventListener("click", function() {
        on = !on;
        if (on) {
            document.querySelector("#btnRun").innerHTML = "Stop";
            var timestep = 10;
            clock = setInterval(function() {
                updateVectors(masses);
                updatePosition(masses, timestep);
                painter.draw();
            }, timestep);
        } else {
            document.querySelector("#btnRun").innerHTML = "Run";
            clearInterval(clock);
        }
    });
}

