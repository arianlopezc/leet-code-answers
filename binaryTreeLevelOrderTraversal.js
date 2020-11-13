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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    const response = [];
    let toLevel = [root];
    let children = [];
    while (toLevel.length > 0) {
        const mapped = [];
        for (const item of toLevel) {
            mapped.push(item.val);
            if (item.left) {
                children.push(item.left);
            }
            if (item.right) {
                children.push(item.right);
            }
        }
        response.push(mapped);
        toLevel = children;
        children = [];
    }
    return response;
};