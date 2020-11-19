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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (root) {
        traverse(root);
    }
};

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
function traverse(node) {
    if (node == null) {
        return null;
    }
    if (node.left == null && node.right == null) {
        return node;
    }
    const left = traverse(node.left);
    const right = traverse(node.right);
    if (left != null) {
        left.right = node.right;
        node.right = node.left;
        node.left = null;
    }
    return right == null ? left : right;
}