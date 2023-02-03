function firstThree(array) {
    return array.filter((ele, i) => {
        return i < 3;
    })
}

module.exports = firstThree;