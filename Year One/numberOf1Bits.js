/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let total = 0;
    while (n != 0) {
        total += n & 1;
        n = n >>> 1;
    }
    return total;
};