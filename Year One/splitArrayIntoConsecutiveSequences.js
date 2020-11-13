/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    const map = new Map();
    let biggestValue = 0;
    for (let number of nums) {
        if (map.has(number)) {
            map.set(number, map.get(number) + 1);
        } else {
            map.set(number, 1);
        }
        biggestValue = Math.max(biggestValue, map.get(number));
    }
    if (biggestValue === 1) {
        if (nums.length >= 3) return true;
        else return false;
    }
    const subsequences = new Array(biggestValue);
    let smallestSubsequence = Infinity;
    for (let [key, value] of map.entries()) {
        for (let instance = 1; instance <= value; instance++) {
            if (!Array.isArray(subsequences[instance - 1])) {
                subsequences[instance - 1] = [];
            }
            subsequences[instance - 1].push(key);
            smallestSubsequence = Math.min(smallestSubsequence, subsequences[instance - 1].length);
        }
    }
    return smallestSubsequence >= 3;
};

console.log(isPossible([1,2,3,3,4,5]));