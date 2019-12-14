/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    function calculate(row, col) {
        let total = 0;
        const queue = [ [row, col] ];
        while (queue.length > 0) {
            const point = queue.shift();
            if (grid[point[0]][point[1]] < 2) {
                grid[point[0]][point[1]]++;
                if (point[0] - 1 >= 0) {
                    if (grid[point[0] - 1][point[1]] === 0) {
                        total++;
                    } else if (grid[point[0] - 1][point[1]] === 1) {
                        queue.push([point[0] - 1, point[1]]);
                    }
                } else {
                    total++;
                }
                if (point[0] + 1 < grid.length) {
                    if (grid[point[0] + 1][point[1]] === 0) {
                        total++;
                    } else if (grid[point[0] + 1][point[1]] === 1) {
                        queue.push([point[0] + 1, point[1]]);
                    }
                } else {
                    total++;
                }
                if (point[1] - 1 >= 0) {
                    if (grid[point[0]][point[1] - 1] === 0) {
                        total++;
                    } else if (grid[point[0]][point[1] - 1] === 1) {
                        queue.push([point[0], point[1] - 1]);
                    }
                } else {
                    total++;
                }
                if (point[1] + 1 < grid[point[0]].length) {
                    if (grid[point[0]][point[1] + 1] === 0) {
                        total++;
                    } else if (grid[point[0]][point[1] + 1] === 1) {
                        queue.push([point[0], point[1] + 1]);
                    }
                } else {
                    total++;
                }
            }
        }
        return total;
    }

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === 1)
                return calculate(row, col);
        }
    }
    return 0;
};