/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    if (!nums.length) return 0;
    let l = nums.length - 1;
    let r = 0;
    let stack = [];
    for (let i = 0; i < nums.length; i ++) {
        if (!stack.length || nums[i] >= nums[stack[stack.length - 1]]) {
            stack.push(i)
        } else {
            l = Math.min(l, stack.pop());
            i --;
        }
    }
    stack = [];
    for (let i = nums.length - 1; i >= 0; i --) {
        if (!stack.length || nums[i] <= nums[stack[stack.length - 1]]) {
            stack.push(i);
        } else {
            r = Math.max(r, stack.pop());
            i ++;
        }
    }
    return r - l > 0 ? r - l + 1 : 0;
};

console.log(findUnsortedSubarray([1,3,2,4,5]));