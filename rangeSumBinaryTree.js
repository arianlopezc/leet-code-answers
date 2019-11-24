/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    const stack = [root];
    let totalSum = 0;
    while (stack.length !== 0) {
        const node = stack.shift();
        if (node.val < R && node.val > L || node.val === L || node.val === R)
            totalSum += node.val;
        if (node.left)
            stack.push(node.left);
        if (node.right)
            stack.push(node.right);
    }
    return totalSum;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}