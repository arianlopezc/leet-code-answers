/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    if (A.length <= 1)
        return true;
    let indexFirst = 0;
    let indexSecond = 1;
    while (A[indexFirst] === A[indexSecond]) {
        indexFirst++;
        indexSecond++;
    }
    const increasing = A[indexFirst] < A[indexSecond];
    for (; indexFirst < A.length - 1; indexFirst++) {
        if (increasing) {
            if (A[indexFirst] > A[indexFirst + 1])
                return false;
        } else {
            if (A[indexFirst] < A[indexFirst + 1])
                return false;
        }
    }
    return true;
};