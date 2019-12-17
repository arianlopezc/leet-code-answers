/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    var findPre = function(node) {
        let root = node.left;
        while (root.right) root = root.right;
        return root.val;
    }
    var findSuc = function(node) {
        let root = node.right;
        while (root.left) root = root.left
        return root.val;
    }

    var remove = function(val, node=root) {    
        if (!node) return node;
        if (val > node.val) {
            node.right = remove(val, node.right);
        } else if (val < node.val){
            node.left = remove(val, node.left);
        } else {
            if (!node.left && !node.right) {
                node = null;
            } else if (!node.left) { 
                node.val = findSuc(node);
                node.right = remove(node.val, node.right);
            } else {
                node.val = findPre(node);
                node.left = remove(node.val, node.left);
            }
        }
        return node;
    }
    return remove(key);
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}