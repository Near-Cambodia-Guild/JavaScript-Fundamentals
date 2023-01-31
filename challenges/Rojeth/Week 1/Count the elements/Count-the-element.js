function countElements(elements) {
    let object = {};
    for (let i = 0; i < elements.length; i++) {
        if (object[elements[i]] >=1){
            object[elements[i]]++;
        } else {
            object[elements[i]] = 1;
        }
    }
    return object;
}

module.exports = countElements;