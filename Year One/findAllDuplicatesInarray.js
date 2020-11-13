/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const visited = {};
    for (let number of nums) {
        if (!visited.hasOwnProperty(number)) {
            visited[number] = 0;
        }
        visited[number]++;
    }
    const result = [];
    for (let index in visited) {
        if (visited[index] === 2)
            result.push(parseInt(index));
    }
    return result;
};