const Shape = require('./Shape');

function Rectangle(x, y, height, width) {
    Shape.call(this, x, y, height, width);
    this.height = height;
    this.width = width;
}
Rectangle.prototype = Object.create(Shape.prototype);

module.exports = Rectangle;