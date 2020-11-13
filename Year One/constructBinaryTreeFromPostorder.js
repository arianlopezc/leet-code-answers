/**
 * @param {number[]} postorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(postorder, inorder) {
    if (postorder.length === 0 || inorder.length === 0 || postorder.length !== inorder.length) {
        return null;
    }
    return build(postorder, inorder);

    /**
     * @param {number[]} postorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    function build(postorder, inorder) {
        if (inorder.length === 0 || postorder.length === 0) {
            return null;
        } else {
            const rootValue = postorder.pop();
            const newNode = new TreeNode(rootValue);
            const elementIndex = getElementPosition(inorder, rootValue);
            const leftPost = postorder.slice(0, elementIndex);
            const leftOrd = inorder.slice(0, elementIndex);
            const rightPost = postorder.slice(elementIndex);
            const rightOrd = inorder.slice(elementIndex + 1);
            newNode.left = build(leftPost, leftOrd);
            newNode.right = build(rightPost, rightOrd);
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