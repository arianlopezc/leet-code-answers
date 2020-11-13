/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    const toBeSorted = [];
    doInOrder(root, toBeSorted);
    return isOrdered(toBeSorted);
};

function doInOrder(root, sortedItems) {
    if (root) {
        if (root.left) {
            doInOrder(root.left, sortedItems);
        }
        sortedItems.push(root.val);
        if (root.right) {
            doInOrder(root.right, sortedItems);
        }
    }
}

function isOrdered(elements) {
    if (elements.length <= 1) return true;
    let smaller = elements[0];
    for (let item of elements) {
        if (smaller > item) {
            return false;
        }
    }
    return true;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}