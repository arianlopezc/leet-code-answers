/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for (let index = 0; index < nums.length; index++) {
        const newIndex = Math.abs(nums[index]) - 1;
        if (nums[newIndex] > 0) {
            nums[newIndex] *= -1;
        }
    }
    const result = [];
    for (let index = 1; i <= nums.length; index++) {
        if (nums[index - 1] > 0) {
            result.push(index);
        }
    }
    return result;
};