/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    const largest = num1.length >= num2.length ? num1 : num2;
    let shortest = num1.length < num2.length ? num1 : num2;
    shortest = largest.length - shortest.length === 0 ? shortest : "0".repeat(largest.length - shortest.length) + shortest;
    let sum = "";
    let carryover = 0;
    for (let index = largest.length - 1; index >= 0; index--) {
        let charShortest = shortest.length > index ? parseInt(shortest[index]) : 0;
        const currentLarge = parseInt(largest[index]) + carryover;
        const indexSum = charShortest + currentLarge;
        if (indexSum >= 10) {
            sum = (indexSum - 10).toString() + sum;
            carryover = 1;
        } else {
            sum = indexSum.toString() + sum;
            carryover = 0;
        }
    }
    sum = carryover > 0 ? carryover.toString() + sum : sum;
    return sum;
};