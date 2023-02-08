function map(arr, callback) {
    let array = [];
    for (let i in arr) {
        array[i] = callback(arr[i], i); 
    }
    return array;
}

module.exports = map;

