/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    var recur = function(nums) {
        if (nums.length == 0) return null;
        let mid = Math.floor(nums.length/2);
        let node = new TreeNode(nums[mid]);
        node.left = recur(nums.slice(0,mid));
        node.right = recur(nums.slice(mid+1));
        return node;
    }
    return recur(nums);
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}