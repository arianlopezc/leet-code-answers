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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    if (!root) {
        return 0;
    }
    let leftMostValue = 0;
    let navigation = [root];
    let total = 1;
    while (total > 0) {
        const node = navigation.shift();
        if (node.left) {
            navigation.push(node.left);
        }
        if (node.right) {
            navigation.push(node.right);
        }
        total--;
        if (total === 0) {
            total = navigation.length;
            if (total > 0) {
                leftMostValue = navigation[0].val;
            }
        }
    }
    return leftMostValue;
};