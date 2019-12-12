/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
function Node(val,neighbors) {
   this.val = val;
   this.neighbors = neighbors;
};

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node)
        return undefined;
    const cloned = new Map();
    return clone(node);

    function clone(navNode) {
        if (!cloned.has(navNode.val)) {
            const clonedNode = new Node(navNode.val, []);
            cloned.set(navNode.val, clonedNode);
            for (let neighbor of navNode.neighbors) {
                clonedNode.neighbors.push(clone(neighbor));
            }
            return clonedNode;
        } else {
            return cloned.get(navNode.val);
        }
    }
};