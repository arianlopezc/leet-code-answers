/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function(nums, k) {
    if (nums.length === 0) return k;
    if (totalMissingNumbers(nums, nums.length - 1) < k) {
        return nums[nums.length - 1] + k - totalMissingNumbers(nums, nums.length - 1);
    }
    let min = 0;
    let max = nums.length - 1;
    while (min != max) {
        const pivot = min + Math.floor(((max - min) / 2));
        if (totalMissingNumbers(nums, pivot) < k) {
            min = pivot + 1;
        } else {
            max = pivot;
        }
    }
    return nums[min - 1] + k - totalMissingNumbers(nums, min - 1);
};

/**
 * @param {number[]} nums
 * @param {number} index
 * @return {number}
 */
function totalMissingNumbers(nums, index) {
    return nums[index] - nums[0] - index;
}