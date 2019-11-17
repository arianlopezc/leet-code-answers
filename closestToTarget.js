/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let closestToTarget = Infinity;
    nums.sort((a, b) => a < b ? -1 : a === b ? 0 : 1);
    for (let index = 1; index < nums.length - 1; index++) {
        let firstPivotPos = 0;
        let lastPivotPos = nums.length - 1;
        let valueCurrentIndex = nums[index];
        while (firstPivotPos < index && lastPivotPos > index) {
            const currentSum = nums[firstPivotPos] + nums[lastPivotPos] + valueCurrentIndex;
            if (Math.abs(target - currentSum) < Math.abs(target - closestToTarget)) {
                closestToTarget = currentSum;
            }
            if (currentSum === target) return target;
            if (currentSum > target) lastPivotPos--;
            else firstPivotPos++;
        }
    }
    return closestToTarget;
};

console.log(threeSumClosest([1,2,4,8,16,32,64,128], 82));