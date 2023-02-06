// food is an array full of food objects
// let's group them by "type" and return them
function group(foods) {
    return foods.reduce((accumulator, currentValue) => {
        accumulator[currentValue.type] = accumulator[currentValue.type] || [];// TODO: reduce logic
        accumulator[currentValue.type].push(currentValue.food);
        return accumulator;
    }, {}/* TODO: add initial value */ );
}

module.exports = group;