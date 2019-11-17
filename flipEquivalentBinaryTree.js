function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
    return performBFSSearch(root1, root2);
};

function performBFSSearch(node1, node2) {
    if (node1 && node1 !== null && node2 && node2 !== null && node1.val === node2.val) {
        let leftEqual1 = performBFSSearch(node1.left, node2.right);
        let rightEqual1 = performBFSSearch(node1.right, node2.left);
        let leftEqual2 = performBFSSearch(node1.left, node2.left);
        let rightEqual2 = performBFSSearch(node1.right, node2.right);
        return leftEqual1 === rightEqual1 && leftEqual2 === rightEqual2;
    } else if (node1 === null && node2 === null) return true;
    else return false;
}