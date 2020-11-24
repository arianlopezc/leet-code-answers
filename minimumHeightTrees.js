/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    const bridges = new Map();
    for (const bridge of edges) {
        if (bridges.has(bridge[0])) {
            bridges.get(bridge[0]).push(bridge[1]);
        } else {
            bridges.set(bridges[0], [bridge[1]]);
        }
        if (bridges.has(bridge[1])) {
            bridges.get(bridge[1]).push(bridge[0]);
        } else {
            bridges.set(bridges[1], [bridge[0]]);
        }
    }
    let 
};

/**
 * @param {number} vertex
 * @param {Map} bridges
 * @return {number}
 */
function checkHeight(vertex, bridges) {

}