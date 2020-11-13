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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const traversed = [];
    function inOrderTraverse(node) {
        if (node.left) {
            inOrderTraverse(node.left);
        }
        traversed.push(node.val);
        if (node.right) {
            inOrderTraverse(node.right);
        }
    }
    if (root)
        inOrderTraverse(root);
    return traversed;
};