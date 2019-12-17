/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0 || preorder.length !== inorder.length) {
        return null;
    }
    return build(preorder, inorder);

    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    function build(preorder, inorder) {
        if (inorder.length === 0 || preorder.length === 0) {
            return null;
        } else {
            const rootValue = preorder.shift();
            const newNode = new TreeNode(rootValue);
            const elementIndex = getElementPosition(inorder, rootValue);
            const leftPre = preorder.slice(0, elementIndex);
            const leftOrd = inorder.slice(0, elementIndex);
            const rightPre = preorder.slice(elementIndex);
            const rightOrd = inorder.slice(elementIndex + 1);
            newNode.left = build(leftPre, leftOrd);
            newNode.right = build(rightPre, rightOrd);
            return newNode;
        }
    }
};

function getElementPosition(list, value) {
    for (let index = 0; index < list.length; index++) {
        if (list[index] === value) {
            return index;
        }
    }
    return -1;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}