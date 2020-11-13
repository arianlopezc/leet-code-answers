/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let prevMax = 0;
    let currMax = 0;
    for (let house of nums) {
        let temp = currMax;
        currMax = Math.max(prevMax + house, currMax);
        prevMax = temp;
    }
    return currMax;
};