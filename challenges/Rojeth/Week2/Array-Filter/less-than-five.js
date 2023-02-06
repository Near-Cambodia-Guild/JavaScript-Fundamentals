function lessThanFive(array){
    return array.filter((function (ele) {
        return ele < 5;
    }));
}
module.exports = lessThanFive;