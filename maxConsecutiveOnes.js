/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxTotal = 0;
    let currentMax = 0;
    for (let number of nums) {
        if (number === 1) {
            currentMax++;
        } else {
            maxTotal = currentMax > maxTotal ? currentMax : maxTotal;
            currentMax = 0;
        }
    }
    return currentMax > maxTotal ? currentMax : maxTotal;
};