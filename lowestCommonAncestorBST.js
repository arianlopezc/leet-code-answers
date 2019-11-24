/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const mapP = new Map();
    if (p)
        findBST(root, p.val, mapP);
    const mapQ = new Map();
    if (q)
        findBST(root, q.val, mapQ);
    for (let item of mapP) {
        if (mapQ.has(item[0])) {
            return mapQ.get(item[0]);
        }
    }
};

/**
 * @param {TreeNode} node
 * @param {number} value
 * @param {Map} map
 */
function findBST(node, value, map) {
    if (node.val === value) {
        map.set(node.val, node);
        return true;
    } else {
        if (node.val < value && node.right) {
            const found = findBST(node.right, value, map);
            if (found) {
                map.set(node.val, node);
            }
            return found;
        } else if (node.val > value && node.left) {
            const found = findBST(node.left, value, map);
            if (found) {
                map.set(node.val, node);
            }
            return found;
        } else {
            return false;
        }
    }
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const zero = new TreeNode(0);
const two = new TreeNode(2);
const four = new TreeNode(4);
const six = new TreeNode(6);
const three = new TreeNode(3);
const five = new TreeNode(5);
const eight = new TreeNode(8);
const seven = new TreeNode(7);
const nine = new TreeNode(9);

six.left = two;
six.right = eight;
two.left = zero;
two.right = four;
four.left = three;
four.right = five;
eight.left = seven;
eight.right = nine;
console.log(lowestCommonAncestor(six, two, eight));
