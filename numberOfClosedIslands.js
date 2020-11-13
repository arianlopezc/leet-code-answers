/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    if (grid.length === 0) {
        return 0;
    }
    let total = 0;
    for (let indexRow = 0; indexRow < grid.length; indexRow++) {
        for (let indexCol = 0; indexCol < grid[indexRow].length; indexCol++) {
            if (grid[indexRow][indexCol] === 0) {
                if (browseIsland(grid, indexRow, indexCol)) {
                    total++;
                }
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
    grid[indexRow][indexCol] = -1;
    let isAnIsland = true;
    const top = indexRow - 1;
    if (top < 0) {
        isAnIsland = false;
    }
    const bottom = indexRow + 1;
    if (bottom >= grid.length) {
        isAnIsland = false;
    }
    const left = indexCol - 1;
    if (left < 0) {
        isAnIsland = false;
    }
    const right = indexCol + 1;
    if (right >= grid[indexRow].length) {
        isAnIsland = false;
    }
    if (top >= 0 && grid[top][indexCol] === 0) {
        isAnIsland = browseIsland(grid, top, indexCol) && isAnIsland && true;
    }
    if (bottom < grid.length && grid[bottom][indexCol] === 0) {
        isAnIsland = browseIsland(grid, bottom, indexCol) && isAnIsland && true;
    }
    if (left >= 0 && grid[indexRow][left] === 0) {
        isAnIsland = browseIsland(grid, indexRow, left) && isAnIsland && true;
    }
    if (right < grid[indexRow].length && grid[indexRow][right] === 0) {
        isAnIsland = browseIsland(grid, indexRow, right) && isAnIsland && true;
    }
    return isAnIsland;
}