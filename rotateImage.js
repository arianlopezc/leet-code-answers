/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for (let outterIndex = 0; outterIndex < Math.floor(matrix.length / 2); outterIndex++) {
        for (let innerIndex = outterIndex; innerIndex < (matrix.length - outterIndex - 1); innerIndex++) {
            const fourthX = innerIndex;
            const fourthY = outterIndex;
            const firstX = (matrix.length - 1) - outterIndex;
            const firstY = innerIndex;
            const firstSwapResult = swap(firstX, firstY, matrix[fourthY][fourthX], matrix);
            const secondX = (matrix.length - 1) - innerIndex;
            const secondY = (matrix.length - 1) - outterIndex;
            const secondSwapResult = swap(secondX, secondY, firstSwapResult, matrix);
            const thirdX = outterIndex;
            const thirdY = (matrix.length - 1) - innerIndex;
            const thirdSwapResult = swap(thirdX, thirdY, secondSwapResult, matrix);
            swap(fourthX, fourthY, thirdSwapResult, matrix);
        }
    }
};

var swap = function(x, y, value, matrix) {
    const oldValue = matrix[y][x];
    matrix[y][x] = value;
    return oldValue;
}