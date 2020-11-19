/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
    if (edges.length === 0) {
        return 0;
    }
    const mapped = mapEdges(edges);
    const totalPaths = searchApples(0, hasApple, mapped);
    return totalPaths;
};

/**
 * @param {number} vertex
 * @param {boolean[]} hasApple
 * @param {Map} mappedEdges
 * @return {number}
 */
function searchApples(vertex, hasApple, mappedEdges) {
    const bridges = mappedEdges.get(vertex);
    let totalPath = hasApple[vertex] && vertex !== 0 ? 2 : 0;
    if (bridges && bridges.length > 0) {
        for (const bridge of bridges) {
            totalPath += searchApples(bridge, hasApple, mappedEdges);
        }
    }
    return totalPath > 0 && !hasApple[vertex] && vertex !== 0 ? totalPath + 2: totalPath;
}

/**
 * @param {number[][]} edges
 * @return {Map}
 */
function mapEdges(edges) {
    const mapped = new Map();
    for (let edge of edges) {
        const [nodeOne, nodeTwo] = edge;
        let edgesInNode = mapped.get(nodeOne);
        if (mapped.has(nodeTwo)) {
            mapped.get(nodeTwo).push(nodeOne);
            mapped.set(nodeOne, []);
        } else {
            if (edgesInNode) {
                edgesInNode.push(nodeTwo);
            } else {
                mapped.set(nodeOne, [ nodeTwo ]);
            }
            mapped.set(nodeTwo, []);
        }
    }
    return mapped;
}