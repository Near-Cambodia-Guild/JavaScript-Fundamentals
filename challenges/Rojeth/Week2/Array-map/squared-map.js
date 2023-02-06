const squared = require('./squared');

function squaredMap(arr) {
    let array = arr.map((ele) => squared(ele));
    return array;
}

module.exports = squaredMap;