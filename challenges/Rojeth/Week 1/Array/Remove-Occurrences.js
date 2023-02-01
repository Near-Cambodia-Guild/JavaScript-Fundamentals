function removeOccurrences(array, num) {
    for (let i = 0; i < array.length;i++) {
        if(array[i] == num) {
                array.splice(i, num);
                i--;
        }
    }
}

module.exports = removeOccurrences;