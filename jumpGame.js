/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    return jump(nums, 0);
};

/**
 * @param {number[]} nums
 * @param {number[]} 
 * @return {boolean}
 */
function jump(nums, index) {
    if (nums.length - 1 === index) {
        return true;
    }
    if (nums.length - 1 < index) {
        return false;
    }
    for (let step = nums[index]; step > 0; step--) {
        if (jump(nums, index + step)) {
            return true;
        }
    }
    return false;
}