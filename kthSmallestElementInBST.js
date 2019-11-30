/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    function dfs(node) {
        if (node.left) {
            const resDFS = dfs(node.left);
            if (resDFS > -1)
                return resDFS;
        }
        k = k === 0 ? k : k - 1;
        if (k === 0) {
            return node.val;
        }
        if (node.right) {
            const resDFS = dfs(node.right);
            if (resDFS > -1)
                return resDFS;
        }
        return -1;
    }
    return dfs(root);
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
