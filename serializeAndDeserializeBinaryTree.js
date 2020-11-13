/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const result = [];
    if (root) {
        traverseSerialize(root, 0, result);
    }
    return result.toString();
};

function traverseSerialize(node, index, arrayResult) {
    if (node) {
        arrayResult[index] = node.val;
        traverseSerialize(node.left ? node.left : null, (2 * index) + 1, arrayResult);
        traverseSerialize(node.right ? node.right : null, (2 * index) + 2, arrayResult);
    } else {
        arrayResult[index] = null;
    }
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const nodes = data.split(',');
    const root = traverse(nodes, 0);
    return root;
};

function traverse(array, index) {
    if (index < array.length) {
        const newNode = array[index] ? new TreeNode(parseInt(array[index])) : null;
        const leftChild = (2 * index) + 1;
        const rightChild = (2 * index) + 2;
        if (newNode) {
            newNode.left = traverse(array, leftChild);
            newNode.right = traverse(array, rightChild);   
        }
        return newNode;
    }
    return null;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */