function sortStringsUp(array) {
    array.sort(function comparison(a, b) {
        return a.localeCompare(b);
    });
}

module.exports = sortStringsUp;