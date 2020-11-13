/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) {
        return null;
    }
    const set = new Set();
    while (headA || headB) {
        if (headA) {
            if (set.has(headA.val)) {
                return headA;
            } else {
                set.add(headA.val);
            }
            if (headA.next) {
                headA = headA.next;
            }
        }
        if (headB) {
            if (set.has(headB.val)) {
                return headB;
            } else {
                set.add(headB.val);
            }
            if (headB.next) {
                headB = headB.next;
            }
        }
    }
    return null;
};