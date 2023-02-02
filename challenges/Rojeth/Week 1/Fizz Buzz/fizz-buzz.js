function fizzBuzz(numbers) {
    let str= [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 === 0) {
            str+="fizz";
        }
        if (numbers[i] % 5 === 0) {
            str+="buzz";
        }
    }
    return str;
}

module.exports = fizzBuzz;