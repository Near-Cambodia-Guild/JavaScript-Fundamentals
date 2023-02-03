function shortStrings(array) {
    return array.filter(element => {
        return element.length <= 3;
    });
}

module.exports = shortStrings;