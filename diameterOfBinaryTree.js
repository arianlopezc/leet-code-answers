/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    ans = 1;
    calculateDepth(root);
    return ans - 1;

    /**
     * @param {TreeNode} node
     * @return {number}
     */
    function calculateDepth(node) {
        if (node == null) return 0;
        const L = depth(node.left);
        const R = depth(node.right);
        ans = Math.max(ans, L+R+1);
        return Math.max(L, R) + 1
    }
};