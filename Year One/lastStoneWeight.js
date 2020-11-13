/**
 * @param {number[]} stones
 * @return {number}
 */
function getMax(stones) {
    let maxIndex = 0;
    let biggest = -1;
    for (let index = 0; index < stones.length; index++) {
        if (stones[index] > biggest) {
            biggest = stones[index];
            maxIndex = index;
        }
    }
    stones.splice(maxIndex, 1);
    return biggest;
}

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while (stones.length >= 2) {
        const first = getMax(stones);
        const second = getMax(stones);
        const diff = first - second;
        if (diff !== 0) {
            stones.push(diff);
        }
    }
    return stones.length === 1 ? stones[0] : 0;
};