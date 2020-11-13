/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const result = [];
    for (let number = 1; number <= n; number++) {
        if (number % 3 === 0 && number % 5 === 0) {
            result.push('FizzBuzz');
        } else if (number % 3 === 0) {
            result.push('Fizz');
        } else if (number % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(number.toString());
        }
    }
    return result;
};