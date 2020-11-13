/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set();
    let processed = 0;
    for (let number of nums) {
        set.add(number);
        processed++;
        if (set.size !== processed) {
            return true;
        }
    }
    return false;
};