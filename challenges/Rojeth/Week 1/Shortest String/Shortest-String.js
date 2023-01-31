function shortestString(str1, str2) {
    if (str1 < str2) {
        return str2;
    } else {
        return str1;
    }
}

module.exports = shortestString;