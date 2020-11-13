/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    if (grid.length === 0) {
        return 0;
    }
    let total = 0;
    for (let indexRow = 0; indexRow < grid.length; indexRow++) {
        for (let indexCol = 0; indexCol < grid.length; indexCol++) {
            if (grid[indexRow][indexCol] === 1) {
                total += browseIsland(grid, indexRow, indexCol);
            }
        }
    }
    return total;
};

/**
 * @param {number[][]} grid
 * @param {number} indexRow
 * @param {number} indexCol
 * @return {number}
 */
function browseIsland(grid, indexRow, indexCol) {
    let total = 1;
    grid[indexRow][indexCol] = -1;
    if (indexRow - 1 >= 0 && grid[indexRow - 1][indexCol] === 1) {
        total += browseIsland(grid, indexRow - 1, indexCol);
    }
    if (indexRow + 1 < grid.length && grid[indexRow + 1][indexCol] === 1) {
        total += browseIsland(grid, indexRow + 1, indexCol);
    }
    if (indexCol - 1 >= 0 && grid[indexRow][indexCol - 1] === 1) {
        total += browseIsland(grid, indexRow, indexCol - 1);
    }
    if (indexCol + 1 < grid[indexRow].length && grid[indexRow][indexCol + 1] === 1) {
        total += browseIsland(grid, indexRow, indexCol + 1);
    }
    return total;
}