function halfValue(numbers) {
    const _array = numbers.map((item, index) => {
        return Math.round(item / 2);

    })
    return _array;
}
module.exports = halfValue;