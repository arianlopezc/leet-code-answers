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
 * @return {number}
 */
var sumNumbers = function(root) {
    let totalSum = 0;
    function bfs(node, number) {
        if (!node.left && !node.right) {
            totalSum = totalSum + parseInt(number + node.val.toString());
        } else {
            if (node.left) {
                bfs(node.left, number + node.val.toString());
            }
            if (node.right) {
                bfs(node.right, number + node.val.toString());
            }
        }
    }
    if (root)
        bfs(root, '');
    return totalSum;
};