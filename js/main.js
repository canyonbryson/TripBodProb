window.onload = function() {
    let cvs = document.querySelector("#canvasForeground");
    let cvsBackground = document.querySelector("#canvasBackground");

    var painter = new Painter(cvs);
    var painterBackground = new Painter(cvsBackground, true);
    painter.addObject(painterBackground);
    painterBackground.addObject(new Background("black", 1));
    painterBackground.addObject(new Stars());
    painter.draw();

    let colors = ["FFF07C", "FFAAEA", "80FF72", "d319d7", "eb7a49", "e01b12", "17BEBB", "F61067"];

    var sliders = [document.getElementById("m1"), document.getElementById("m2"), document.getElementById("m3")];
    var masses = [];
    var maxMagnitudes = [];
    var on = false;
    var clock;
    var point;
    
    // Update the current slider value (each time you drag the slider handle)
    for (let i = 0; i < 3; i++) {
        sliders[i].oninput = function() {
            if (masses.length > i) {
                masses[i].mass = parseInt(this.value);
                maxMagnitudes = calculateMaxMagnitudes(masses[0], masses[1], masses[2]);
                painter.draw();
            }
        }
    }

    window.addEventListener("click", function(e) {
        if (masses.length < 3) {
            let rand = Math.floor(Math.random() * colors.length);
            let removedColor = colors.splice(rand, 1)[0];
            let mass = new Mass(painter, e.clientX, e.clientY, sliders[masses.length].value, painterBackground, masses.length, 1, "#" + removedColor);
            masses.push(mass);
            painter.addObject(mass);
            painter.draw();
        }
        if (masses.length == 3) {
            document.querySelector("#slidecontainercontainer").style.display = "block";
            document.querySelector("#txtInfo").style.display = "none";
            document.querySelector("#btnRun").style.display = "inline";
            point  = new Point(masses);
            painter.addObject(point);
        }
    });

    document.querySelector("#btnRun").addEventListener("click", function() {
        on = !on;
        if (on) {
            maxMagnitudes = calculateMaxMagnitudes(masses[0], masses[1], masses[2]);
            document.querySelector("#btnRun").innerHTML = "Stop";
            var timestep = 10;
            clock = setInterval(function() {
                updateVectors(masses);
                updatePosition(masses, timestep, point);
                painter.draw();
            }, timestep);
        } else {
            document.querySelector("#btnRun").innerHTML = "Run";
            clearInterval(clock);
        }
    });

    // document.addEventListener("mousemove", function(e) {
    //     console.log(calculateAngle(masses[0].x, masses[0].y, e.clientX, e.clientY));
    // });
}

