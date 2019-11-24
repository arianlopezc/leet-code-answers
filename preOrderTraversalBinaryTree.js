/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const path = [];
    traverse(root, path);
    return path;
};

/**
 * @param {TreeNode} node
 * @param {number[]} path
 */
function traverse(node, path) {
    if (node) {
        path.push(node.val);
        if (node.left) {
            traverse(node.left, path);
        }
        if (node.right) {
            traverse(node.right, path);
        }
    }
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}