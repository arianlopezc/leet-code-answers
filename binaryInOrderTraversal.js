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
    inOrderTraverse(root);
    return traversed;
};