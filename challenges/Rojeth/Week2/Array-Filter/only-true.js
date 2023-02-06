function onlyTrue (array) {
    return array.filter((function (ele) {
        return ele === true;
    }));
}

moudule.exports = onlyTrue;