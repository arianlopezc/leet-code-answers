/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    if (nums.length === 1) return nums.pop();
    let right = 0;
    let left = nums.length - 1;
    while (right < left) {
        if (nums[right] === nums[right + 1])
            right += 2;
        else
            return nums[right];
        if (nums[left] === nums[left - 1])
            left -= 2;
        else
            return nums[left];
    }
    return nums[right];
};

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]));