const Shape = require('./Shape');

function Circle(x, y, radius) {
    Shape.call(this, x, y);
    this.radius = radius;
    // store radius on this
}

module.exports = Circle;