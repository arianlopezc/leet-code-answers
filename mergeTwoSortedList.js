/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    const initial = new ListNode();
    let nav = initial;
    while (l1) {
        if (l2) {
            if (l1.val <= l2.val) {
                nav.next = new ListNode(l1.val, null);
                l1 = l1.next;
                nav = nav.next;
            } else {
                nav.next = new ListNode(l2.val, null);
                l2 = l2.next;
                nav = nav.next;
            }
        } else {
            nav.next = new ListNode(l1.val, null);
            l1 = l1.next;
            nav = nav.next;
        }
    }
    while (l2) {
        nav.next = new ListNode(l2.val, null);
        l2 = l2.next;
        nav = nav.next;
    }
    return initial.next;
};