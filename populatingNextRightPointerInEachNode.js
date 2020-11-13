/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) {
        return;
    }
    let parentStack = [root];
    while (parentStack.length > 0) {
        const children = [];
        for (let index = 0; index < parentStack.length; index++) {
            if (parentStack[index].left) {
                children.push(parentStack[index].left);
            }
            if (parentStack[index].right) {
                children.push(parentStack[index].right);
            }
            if (index + 1 < parentStack.length) {
                parentStack[index].next = parentStack[index + 1];
            } else {
                parentStack[index].next = null;
            }
        }
        parentStack = children;
    }
    return root;
};