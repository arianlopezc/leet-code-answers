var numIslands = function(grid) {
    if (grid.length === 0) return 0;
    if (grid[0].length === 0) return 0;
    const map = {};
    const bottomLimit = grid.length;
    const rightLimit = grid[0].length;
    const leftLimit = 0;
    const topLimit = 0;
    let totalIsland = 0;
    for (let rowIdx in grid) {
        for (let colIdx in grid[rowIdx]) {
            if (!map[`${rowIdx}${colIdx}`] && grid[rowIdx][colIdx] === '1') {
                let stack = [`${rowIdx}${colIdx}`];
                while (stack.length > 0) {
                    const pebble = stack.pop();
                    const pebbleRow = parseInt(pebble[0]);
                    const pebbleCol = parseInt(pebble[1]);
                    if (!map[`${pebbleRow}${pebbleCol}`]) {
                        map[`${pebbleRow}${pebbleCol}`] = true;
                        if (pebbleCol + 1 < rightLimit && grid[pebbleRow][pebbleCol + 1] === '1')
                            stack.push(`${pebbleRow}${pebbleCol + 1}`);
                        if (pebbleCol - 1 >= leftLimit && grid[pebbleRow][pebbleCol - 1] === '1')
                            stack.push(`${pebbleRow}${pebbleCol - 1}`);
                        if (pebbleRow + 1 < bottomLimit && grid[pebbleRow + 1][pebbleCol] === '1')
                            stack.push(`${pebbleRow + 1}${pebbleCol}`);
                        if (pebbleRow - 1 >= topLimit && grid[pebbleRow - 1][pebbleCol] === '1')
                            stack.push(`${pebbleRow - 1}${pebbleCol}`);
                    }
                }
                totalIsland++;
            }
        }
    }
    return totalIsland;
}