window.onload = function() {
    let cvs = document.querySelector("#Canvas1");
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
    var painter = new Painter(cvs);
    var painterPath = new Painter(document.querySelector("#Canvas1"), false);
    var slider1 = document.getElementById("m1");
    var slider2 = document.getElementById("m2");
    var slider3 = document.getElementById("m2");
    var masses = [];
    
    
    // Update the current slider value (each time you drag the slider handle)
    slider1.oninput = function() {
        if (masses.length > 0) {
            masses[0].mass = this.value;
            painter.draw();
        }
    }
    slider2.oninput = function() {
        if (masses.length > 1) {
            masses[1].mass = this.value;
            painter.draw();
        }
    }
    slider3.oninput = function() {
        if (masses.length > 2) {
            masses[2].mass = this.value;
            painter.draw();
        }
    }

    window.addEventListener("click", function(e) {
        if (masses.length < 3) {
            let mass = new Mass(painter, e.clientX, e.clientY, slider1.value, painterPath);
            masses.push(mass);
            painter.addObject(mass);
            painter.draw();
        }
    });
}

