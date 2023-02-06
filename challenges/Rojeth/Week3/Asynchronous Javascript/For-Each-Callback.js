function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i ++) {
        callback(arr[i], i);
    }// for each element in the arr, run the callback, passing in the element
}

module.exports = forEach;