function topDouble(value, top) {
    while(value < top) {
        value = value*2;
    }
    return value/2;
}

module.exports = topDouble;