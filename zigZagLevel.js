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
var zigzagLevelOrder = function(root) {
    if (!root) {
        return [];
    }
    const zigZaggedLevels = [];
    let parentStack = [root];
    let directed = false;
    while (parentStack.length > 0) {
        const children = [];
        for (let parent of parentStack) {
            if (parent.left) {
                if (directed) {
                    children.push(parent.left);
                } else {
                    children.unshift(parent.left);
                }
            }
            if (parent.right) {
                if (directed) {
                    children.push(parent.right);
                } else {
                    children.unshift(parent.right);
                }
            }
        }
        zigZaggedLevels.push(parentStack.map(node => node.val));
        parentStack = children;
        directed = !directed;
    }
    return zigZaggedLevels;
};