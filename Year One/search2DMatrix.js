/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0)
        return false;
    for (let row of matrix) {
        if (row.length > 0 && row[0] <= target && row[row.length - 1] >= target) {
            if (binarySearch(row, target)) {
                return true;
            }
        }
    }
    return false;
};

function binarySearch(list, target) {
    let min = 0;
    let max = list.length;
    while (min < max) {
        const pivot = min + Math.floor((max - min) / 2);
        if (list[pivot] === target)
            return true;
        else {
            if (list[pivot] < target) {
                min = pivot + 1;
            } else {
                max = pivot;
            }
        }
    }
    return false;
}