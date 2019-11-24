/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return [];
    } else {
        const traversed = [[root.val]];
        let parents = [root];
        let children = [];
        while (parents.length > 0) {
            for (let root of parents) {
                if (root.left)
                    children.push(root.left);
                if (root.right)
                    children.push(root.right);
            }
            if (children.length > 0) {
                traversed.push(children.map(child => child.val));
            }
            parents = [ ...children ];
            children = [];
        }
        return traversed;
    }
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}