/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    for (let index = 1; index < nums.length; index++) {
        if (nums[index - 1] > 0)
            nums[index] += nums[index - 1];
        maxSum = Math.max(maxSum, nums[index]);
    }
    return maxSum;
}