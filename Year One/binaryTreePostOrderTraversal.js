/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const traversal = [];
    const visited = [];
    if (root) {
        root.visited = true;
        visited.push(root);
    }
    while (visited.length > 0) {
        const current = visited.pop();
        if (current.left && !current.left.hasOwnProperty('visited')) {
            visited.push(current);
            current.left.visited = true;
            visited.push(current.left);
        } else if (current.right && !current.right.hasOwnProperty('visited')) {
            visited.push(current);
            current.right.visited = true;
            visited.push(current.right);
        } else {
            traversal.push(current.val);
        }
    }
    return traversal;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}