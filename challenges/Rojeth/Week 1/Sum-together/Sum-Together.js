function sumTogether(arr1, arr2) {
    let array = [];
    for (let i = 0; i < arr1.length; i++) {
        array[i] = arr1[i] + arr2[i];
    }
    return array;
}

module.exports = sumTogether;