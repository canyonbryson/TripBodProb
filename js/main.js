window.onload = function() {
    let cvs = document.querySelector("#Canvas1");
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
    var painter = new Painter(cvs);
    var painterPath = new Painter(document.querySelector("#Canvas1"), false);
    var slider1 = document.getElementById("m1");
    var slider2 = document.getElementById("m2");
    var slider3 = document.getElementById("m2");
    var m1;
    var m2;
    var m3;

    
    // Update the current slider value (each time you drag the slider handle)
    slider1.oninput = function() {
        m1.mass = this.value;
        painter.draw();
    }
    slider2.oninput = function() {
        m2.mass = this.value;
        painter.draw();
    }
    slider3.oninput = function() {
        m3.mass = this.value;
        painter.draw();
    }

    window.addEventListener("click", function(e) {
        painter.addObject(new Mass(painter, e.clientX, e.clientY, slider1.value, painterPath));
        painter.draw();
    });
}

