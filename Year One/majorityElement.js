/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = new Map();
    let maximum = null;
    for (let number of nums) {
        const item = map.get(number);
        if (item) {
            item.times++;
            map.set(number, item);
            if (maximum === null || maximum.times < item.times)
                maximum = item;
        } else {
            map.set(number, { value: number, times: 1 });
            if (!maximum)
                maximum = { value: number, times: 1 };
        }
    }
    return maximum ? maximum.value : -1;
};