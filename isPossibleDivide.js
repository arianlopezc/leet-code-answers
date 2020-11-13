/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
    if (nums.length % k !== 0) {
        return false;
    }
    const map = {};
    for (let number of nums) {
        if (typeof map[number] === 'number') {
            map[number] = map[number] + 1;
        } else {
            map[number] = 1;
        }
    }
    const keys = Object.keys(map).map(key => parseInt(key));
    let index = 0;
    for (let key of keys) {
        if (map[key]) {
            let innerIndex = 0;
            let innerKey = key;
            const qtToRemove = map[key];
            while (innerIndex < k - 1) {
                if (typeof map[innerKey + 1] === 'undefined' || map[innerKey] > map[innerKey + 1]) {
                    return false;
                }
                map[innerKey + 1] = map[innerKey + 1] - qtToRemove;
                if (typeof map[innerKey + 1] === 'number' && map[innerKey + 1] === 0) {
                    delete map[innerKey + 1];
                }
                innerIndex++;
                innerKey++;
            }
            delete map[key];
        }
        index++;
    }
    return Object.keys(map).length === 0;
};