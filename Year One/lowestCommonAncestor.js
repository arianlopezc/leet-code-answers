/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const backtrack = new Map();
    findNode(root, backtrack, p);
    findNode(root, backtrack, q);
    const entries = backtrack.entries();
    let size = backtrack.size;
    let found = undefined;
    while (!found && size > 0) {
        const parent = entries.pop();
        if (parent.total > 1)
            found = parent.node;
    }
    return found;
};


/**
 * @param {TreeNode} node
 * @param {Map} backtrack
 * @param {TreeNode} findNode
 * @return {boolean}
 */
function navigateFindNode(node, backtrack, findNode) {
    if (!node) return false;
    else {
        if (node.val === findNode.val) return true;
        else {
            const findLeft = node.left ? navigateFindNode(node.left, backtrack, findNode) : false;
            const findRight = node.right ? navigateFindNode(node.right, backtrack, findNode) : false;
            if (findLeft || findRight) {
                if (backtrack.has(node.val)) {
                    const got = backtrack.get(node.val);
                    got.total++;
                    backtrack.set(node.val, got);
                } else {
                    backtrack.set(node.val, {
                        total: 1,
                        node
                    });
                }
            } else return false;
        }
    }
}