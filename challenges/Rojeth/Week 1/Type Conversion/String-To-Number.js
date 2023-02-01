function toNumber(string) {
    string = +string;
    if (isNaN(string)) {
        return 0;
    }
    return string;
}

module.exports = toNumber;