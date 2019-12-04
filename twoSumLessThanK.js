/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var twoSumLessThanK = function(A, K) {
    if (A.length <= 1 || K === 0)
        return -1;
    A.sort((a, b) => a - b);
    let beginningPointer = 0;
    let lastPointer = A.length - 1;
    let highestLimitTotal = -1;
    while (beginningPointer < lastPointer) {
        if (A[beginningPointer] + A[lastPointer] >= K) {
            lastPointer--;
        } else {
            highestLimitTotal = A[beginningPointer] + A[lastPointer] > highestLimitTotal ? A[beginningPointer] + A[lastPointer] : highestLimitTotal;
            beginningPointer++;
        }
    }
    return highestLimitTotal;
};