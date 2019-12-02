/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    const paths = [];
    function bdf(node, depth, path) {
        if (!node.left && !node.right) {
            if (node.val + depth === sum) {
                path.push(node.val);
                paths.push(path);
            }
        } else {
            if (node.left) {
                bdf(node.left, depth + node.val, [...path, node.val]);
            }
            if (node.right) {
                bdf(node.right, depth + node.val, [...path, node.val]);
            }
        }
    }
    if (root) {
        bdf(root, 0, []);
        return paths;
    } else
        return [];
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}