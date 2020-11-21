window.onload = function() {
    let cvs = document.querySelector("#Canvas1");
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
    }
    slider2.oninput = function() {
        m2.mass = this.value;
    }
    slider3.oninput = function() {
        m3.mass = this.value;
    }

    window.addEventListener("click", function(e) {
        count += 1;
        if (count == 3) {
            count -= 3;
            m3 = new Mass(painter, e.clientX, e.clientY, slider3.value, painterPath)
            painter.addObject(m3);
            painter.draw();
            Animate(m1, m2, m3, painter);
        }
        if (count == 2) {
            m2 = new Mass(painter, e.clientX, e.clientY, slider2.value, painterPath)
            painter.addObject(m2);
            painter.draw();
        }
        else {
            m1 = new Mass(painter, e.clientX, e.clientY, slider1.value, painterPath)
            painter.addObject(m1);
            painter.draw();
        }
    });
}

