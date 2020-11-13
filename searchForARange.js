/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let min = 0;
    let max = nums.length;
    let targetIndex = -1;
    while (min < max && targetIndex === -1) {
        const pivot = min + Math.floor((max - min) / 2);
        if (target === nums[pivot]) {
            targetIndex = pivot;
        } else {
            if (nums[pivot] < target) {
                min = pivot + 1;
            } else {
                max = pivot;
            }
        }
    }
    if (targetIndex === -1) {
        return [-1, -1];
    } else {
        let rightIndex = targetIndex;
        while(rightIndex + 1 < nums.length && nums[rightIndex + 1] === target) {
            rightIndex++;
        }
        let leftIndex = targetIndex;
        while(leftIndex - 1 >= 0 && nums[leftIndex - 1] === target) {
            leftIndex--;
        }
        return [leftIndex, rightIndex];
    }
};