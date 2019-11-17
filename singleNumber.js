/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = {};
    for (let number of nums) {
        if (!map[number]) map[number] = 0;
        map[number]++;
    }
    const smallest = Object.keys(map).find(number => map[number] === 1);
    return smallest;
};