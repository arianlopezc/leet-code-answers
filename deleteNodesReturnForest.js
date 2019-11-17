function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var delNodes = function(root, to_delete) {
    function navigate(node, deletable, trees) {
        if (node.left) {
            navigate(node.left, deletable, trees);
        }
        if (node.right) {
            navigate(node.right, deletable, trees);
        }
        if(to_delete.indexOf(node.val) !== -1) {
            if (node.right && to_delete.indexOf(node.right.val) === -1) trees.push(node.right);
            if (node.left && to_delete.indexOf(node.left.val) === -1) trees.push(node.left);
        }
        if (node.right && to_delete.indexOf(node.right.val) !== -1) node.right = null;
        if (node.left && to_delete.indexOf(node.left.val) !== -1) node.left = null;
    }
    let trees = [];
    if (to_delete.indexOf(root.val) === -1) trees.push(root);
    navigate(root, to_delete, trees);
    return trees;
};