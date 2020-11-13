/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = 1;
    let sum = 0;
    const digits = n.toString().split('').map(digit => parseInt(digit));
    for (const number of digits) {
        product *= number;
        sum += number;
    }
    return product - sum;
};