/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function(maze, start, destination) {
    let map = {};
    const found = navigate(map, start, maze, destination);
    return found;
};

function calculateChildrenByOrientation(position, maze) {
    let children = [];
    let col = position[1];
    while (col >= 0 && !maze[position[0]][col]) col--;
    if (col < 0) children.push([position[0], 0]);
    else children.push([position[0], col + 1]);

    col = position[1];
    while (col < maze[0].length && !maze[position[0]][col]) col++;
    children.push([position[0], col - 1]);

    let row = position[0];
    while (row >= 0 && !maze[row][position[1]]) row --;
    if (row < 0) children.push([0, position[1]]);
    else children.push([row + 1, position[1]]);

    row = position[0];
    while (row < maze.length && !maze[row][position[1]]) row ++;
    children.push([row - 1, position[1]]);
    return children;
}

function navigate(map, position, maze, destination) {
    if (destination[0] === position[0] && destination[1] === position[1]) {
        return true;
    } else {
        const children = calculateChildrenByOrientation(position, maze);
        map[`${position[0]}${position[1]}`] = true;
        for (let child of children) {
            if (!map[`${child[0]}${child[1]}`]) {
                const foundInChildren = navigate(map, child, maze, destination);
                if (foundInChildren) return true;
            }
        }
        return false;
    }
}

console.log(hasPath([[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]],
    [0,4],
    [4,4]));