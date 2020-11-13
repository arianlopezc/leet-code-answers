/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return 1;
    }
    const totals = new Array(nums.length).fill(0);
    totals[0] = 1;
    let totalInLargestIncrease = 0;
    for (let indexTotals = 1; indexTotals < totals.length; indexTotals++) {
        let maxSmallerValues = 0;
        for (let indexNumbers = 0; indexNumbers < indexTotals; indexNumbers++) {
            if (nums[indexTotals] > nums[indexNumbers]) {
                maxSmallerValues = Math.max(maxSmallerValues, totals[indexNumbers]);
            }
        }
        totals[indexTotals] = maxSmallerValues + 1;
        totalInLargestIncrease = Math.max(totalInLargestIncrease, totals[indexTotals]);
    }
    return totalInLargestIncrease;
};