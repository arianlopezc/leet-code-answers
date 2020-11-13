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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let k = n;
    const dummyHead = new ListNode(-1);
    dummyHead.next = head;

    let right = dummyHead.next;
    while (k > 0) {
        right = right.next;
        k--;
    }

    let left = dummyHead;
    while (right != null) {
        left = left.next;
        right = right.next;
    }

    left.next = left.next.next;

    return dummyHead.next;
};