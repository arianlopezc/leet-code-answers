/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const hashSet = new Set();
    let totalJewels = 0;
    for (let jewel of J) {
        hashSet.add(jewel);
    }
    for (let stone of S) {
        if (hashSet.has(stone)) {
            totalJewels++;
        }
    }
    return totalJewels;
};