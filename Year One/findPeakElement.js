/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let min = 0;
    let max = nums.length;
    while (min < max) {
        const pivot = min + Math.floor((max - min) / 2);
        if (nums[pivot] < nums[pivot + 1]) {
            min = pivot + 1;
        } else {
            max = pivot;
        }
    }
    return max;
};