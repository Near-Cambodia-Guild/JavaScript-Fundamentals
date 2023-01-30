function hasOne(array) {
    for(let i = 0; i < array.length; i++) {
        if (array[i] === 1) {
            return true;
        }
    }
}

module.exports = hasOne;