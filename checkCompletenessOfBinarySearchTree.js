/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    const queue = [root];
    while (queue.length > 0) {
        const current = queue.shift();
        if (current === null) {
            continue;
        } else if (
            (current.left !== null && queue.length > 0 && queue[queue.length - 1] === null) ||
            (current.right !== null && current.left === null)
        ) {
            return false;                
        }
        queue.push(current.left);
        queue.push(current.right);
    }
    return true;
};