/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const index = nums.length <= k ? k % nums.length : k;
    const spliced = nums.splice(nums.length - index);
    nums.unshift(...spliced);
};