/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    if (grid.length === 0 || grid[0].length === 0)
        return 0;
    let max = 0;
    for (let row in grid) {
        for (let col in row) {
            if (grid[cell[0]][cell[1]] !== 0) {
                max = Math.max(max, harvestGold(grid, [row, col], new Map()));
            }
        }
    }
    return max;
};

/**
 * @param {number[][]} grid
 * @param {number[]} cell
 * @param {Map} map
 * @return {number[]}
 */
function harvestGold(grid, cell, map) {
    if (grid[cell[0]][cell[1]] === 0)
        return 0;
    let max = 0;
    const childrenCells = getChildrenCells(cell, grid);
    for (let child of childrenCells) {
        if (!map.has(`${child[0]}${child[1]}`)) {
            map.set(`${child[0]}${child[1]}`);
            max = Math.max(max, harvestGold(grid, child, map));
            map.delete(`${child[0]}${child[1]}`);
        }
    }
    return max + grid[cell[0]][cell[1]];
}

/**
 * @param {number[]} cell
 * @param {number[][]} grid
 * @return {number[]}
 */
function getChildrenCells(cell, grid) {
    const col = cell[1];
    const row = cell[0];
    const children = [];
    if (row + 1 < grid.length)
        children.push([row + 1, col]);
    if (row - 1 < grid.length)
        children.push([row - 1, col]);
    if (col + 1 < grid[0].length)
        children.push([row, col + 1]);
    if (col - 1 < grid[0].length)
        children.push([row, col - 1]);
}