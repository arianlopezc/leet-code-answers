/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subArraySum = function(nums, k) {
    if (nums.length === 0) return 0;
    if (nums.length === 1 && nums.pop() === k) return 1;
    else if (nums.length === 1) return 0;
    let totalKFound = 0;
    for (let currentIndex in nums) {
        let currentSum = nums[currentIndex];
        if (currentSum === k) {
            totalKFound++;
        }
        let innerIndex = parseInt(currentIndex) + 1;
        while (innerIndex < nums.length) {
            currentSum += nums[innerIndex];
            if (currentSum === k) {
                totalKFound += 1;
                innerIndex++;
            }  else {
                innerIndex++;
            }
        }
    }
    return totalKFound;
};