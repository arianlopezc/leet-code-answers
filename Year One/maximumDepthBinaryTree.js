/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let maximum = 0;
    if (root) {
        traverse(root, 1);
    }
    return maximum;
    function traverse(node, depth) {
        if (!node.left && !node.right) {
            maximum = maximum < depth ? depth : maximum;
            return;
        }
        if (node.left) {
            traverse(node.left, depth + 1);
        }
        if (node.right) {
            traverse(node.right, depth + 1);
        }
    }
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}