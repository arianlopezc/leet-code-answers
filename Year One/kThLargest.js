/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    if (nums.length === 1) return nums.pop();
    let map = {};
    for (const number of nums) {
        if (map[number] === undefined) map[number] = 0;
        map[number]++;
    }
    const sortedKeys = map
};

console.log(findKthLargest([-1,2,0], 1));