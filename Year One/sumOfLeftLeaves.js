/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let sum = 0;
    function navigate(node) {
        if (node.left && !node.left.left && !node.left.right) {
            sum += node.left.val;
        }
        if (node.left) {
            navigate(node.left);
        }
        if (node.right) {
            navigate(node.right);
        }
    }
    if (root) {
        navigate(root);
    }
    return sum;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}