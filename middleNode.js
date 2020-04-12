/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let nav = head;
    let middle = head;
    let totalNav = 1;
    let totalMiddle = 1;
    while (nav.next) {
        totalNav++;
        nav = nav.next;
        if (totalNav / 2 > totalMiddle) {
            totalMiddle++;
            middle = middle.next;
        }
    }
    return totalNav / 2 === totalMiddle ? middle.next : middle;
};