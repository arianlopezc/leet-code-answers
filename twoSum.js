/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    let index = 0;
    for (const number of nums) {
        const diff = target - number;
        const mapped = map.get(diff);
        if (!isNaN(mapped)) {
            return mapped > index ? [index, mapped] : [mapped, index];
        } else {
            map.set(number, index);
        }
        index++;
    }
};