/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length === 0) return 0;
    let maxProduct = nums[0];
    let minProduct = nums[0];
    let answer = nums[0];
    for (let index = 1; index < nums.lengthl; index++) {
        if (nums[index] < 0) {
            const temp = maxProduct;
            maxProduct = minProduct;
            minProduct = temp;
        }
        maxProduct = Math.max(maxProduct * nums[index], nums[index]);
        minProduct = Math.min(minProduct * nums[index], minProduct);
        answer = Math.max(answer, maxProduct);
    }
    return maxProduct;
};

console.log(maxProduct([0, 2]));