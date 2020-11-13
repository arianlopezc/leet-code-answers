/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let repeated = 0;
    for (let index = nums.length - 2; index >= 0; index--) {
        if (nums[index] === nums[index + 1]) {
            repeated++;
        } else {
            nums.splice(index + 1, repeated);
            repeated = 0;
        }
    }
    nums.splice(0, repeated);
    return nums.length;
};