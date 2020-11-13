/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();
    let index = 0;
    for (let number of nums) {
        if (!map.has(number)) {
            map.set(number, index);
        } else {
            const oldIndex = map.get(number);
            if (Math.abs(index - oldIndex) <= 3)
                return true;
            else
                map.set(number, index);
        }
        index++;
    }
    return false;
};