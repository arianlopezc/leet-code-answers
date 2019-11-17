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
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var btreeGameWinningMove = function(root, n, x) {
    const playerA = find(x, root);
    const totalRight = count(playerA.right);
    const totalLeft = count(playerA.left);
    const rootTotal = n - totalLeft - totalRight - 1;
    const half = n/2;
    return totalLeft > half || totalRight > half || rootTotal > half;
};

function find(value, node) {
    if (node.val === value)
        return node;
    else {
        let found = node.left ? find(value, node.left) : undefined;
        if (!found)
            found = node.right ? find(value, node.right) : undefined;
        return found;
    }
}

function count(node) {
    if (!node)
        return 0;
    else
        return count(node.left) + count(node.right) + 1;
}