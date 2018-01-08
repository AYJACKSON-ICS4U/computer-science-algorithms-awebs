noStroke();

var drawShape = function (x, y, radius, shape, r, g, b) {
    // fill in with the colour
    fill(r, g, b);

    // On even shape numbers draw a rectangle
    if ((shape % 2 === 0) && (shape !== 100)) {
      shape += 1;
      rect(x, y, radius, radius * 0.5);

    // On odd shape numbers draw a circle
    } else if (shape % 2 > 0) {
      ellipse(x, y, radius, radius);
      shape += 1;
      // re-call drawShape
      drawShape(random(400), random(400), 50, shape, r + 5, g + 5, b + 5);

    // When shape reaches 10 shapes return
    } else if (shape === 10) {
      return;
    }

    var newRadius = radius - 50;
    if (newRadius >= 0) {
      drawShape(random(x, x + 50), random(y, x + 50), newRadius, shape,
                  r + 20, g + 20, b + 20);
    }

  };

// Original call with random x and y and brown start colour
drawShape(random(400), random(400), 500, 0, 50, 25, 0);
