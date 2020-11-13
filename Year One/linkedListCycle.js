/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head)
        return false;
    else if (!head.hasOwnProperty('visited')) {
        head.visited = true;
        if (head.next)
            return hasCycle(head.next);
        else return false;
    } else {
        return true;
    }
};