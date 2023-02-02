const Shape = require('./Shape');

function Circle(x, y, radius) {
    Shape.call(this, x, y);
    this.radius = radius;
    // store radius on this
}
Circle.prototype = Object.create(Shape.prototype);

module.exports = Circle;