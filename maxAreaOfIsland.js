/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    if (grid.length === 0) {
        return 0;
    }
    let maxIsland = 0;
    for (let indexRow = 0; indexRow < grid.length; indexRow++) {
        let indexCol = grid[indexRow].findIndex((value) => value === 1);
        while (indexCol !== -1) {
            if (grid[indexRow][indexCol] === 1) {
                const islandTotal = browseIsland(grid, indexRow, indexCol);
                maxIsland = islandTotal > maxIsland ? islandTotal : maxIsland;
            }
            indexCol = grid[indexRow].findIndex((value) => value === 1);
        }
    }
    return maxIsland;
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