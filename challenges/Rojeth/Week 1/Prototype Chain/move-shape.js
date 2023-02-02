// Our Shape "Constructor"
function Shape(x, y) {
    this.position = {x, y};
    // store x and y in this.position
}
Shape.prototype.move = function (x, y) {
    this.position.x += x;
    this.position.y += y;

}

module.exports = Shape;