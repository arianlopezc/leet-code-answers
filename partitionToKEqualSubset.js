/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    let sumNumbers = 0;
    const map = new Map();
    for (const number of nums) {
        sumNumbers += number;
        if (map.has(number)) {
            map.get(number)++;
        } else {
            map.set(number, 1);
        }
    }
    if (sumNumbers % k !== 0) {
        return false;
    }
    const sortedElements = Array.from(map).sort((a, b) => b[0] - a[0]);
    
};