/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    if (A.length < 3) return -1;
    let peak = -1;
    let highest = 0;
    for (let index = 0; index < A.length; index++) {
        if (highest < A[index]) {
            highest = A[index];
            peak = index;
        }
    }
    return peak;
};