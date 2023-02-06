function plusOne(arr) {
    let a = arr.map((value) => {
        return value + 1;
    })
    return a;
}

module.exports = plusOne;