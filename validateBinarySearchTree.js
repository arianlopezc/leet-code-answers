/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (!root) {
        return true;
    }
    const visited = [];
    getPreOrder(root, visited);
    for (let index = 0; index < visited.length - 1; index++) {
        if (visited[index] >= visited[index + 1]) {
            return false;
        }
    }
    return true;
};

function getPreOrder(node, visited) {
    if (node.left) {
        getPreOrder(node.left, visited);
    }
    visited.push(node.val);
    if (node.right) {
        getPreOrder(node.right, visited);
    }
}