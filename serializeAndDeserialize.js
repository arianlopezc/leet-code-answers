/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const arrayRepresentation = root ? [root.val] : [];
    if (arrayRepresentation.length === 0)
        return arrayRepresentation;
    function convert(node, index) {
        const leftPos = (2 * index) + 1;
        if (node.left) {
            arrayRepresentation[leftPos] = node.left.val;
            convert(node.left, leftPos);
        } else {
            if (node.left || node.right)
                arrayRepresentation[leftPos] = undefined;
        }
        const rightPos = (2 * index) + 2;
        if (node.right) {
            arrayRepresentation[rightPos] = node.right.val;
            convert(node.right, rightPos);
        } else {
            if (node.left || node.right)
                arrayRepresentation[rightPos] = undefined;
        }
    }
    convert(root, 0);
    return arrayRepresentation.toString();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (!data || data.length === 0)
        return null;
    const array = data.split(',');
    const root = new TreeNode(array[0]);
    function convert(node, index) {
        const leftPos = (2 * index) + 1;
        const rightPos = (2 * index) + 2;
        node.left = array[leftPos] ? new TreeNode(array[leftPos]) : null;
        if (node.left) {
            convert(node.left, leftPos);
        }
        node.right = array[rightPos] ? new TreeNode(array[rightPos]) : null;
        if (node.right) {
            convert(node.right, rightPos);
        }
    }
    convert(root, 0);
    return root;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}