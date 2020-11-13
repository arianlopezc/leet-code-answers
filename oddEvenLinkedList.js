/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (!head || !head.next) {
        return head;
    }
    const oddHead = new ListNode();
    let navOdd = oddHead;
    let nav = head;
    let keepNavigating = true;
    while (nav.next && keepNavigating) {
        navOdd.next = nav.next;
        navOdd = navOdd.next;
        if (!nav.next.next) {
            keepNavigating = false;
        } else {
            nav = nav.next;
        }
    }
    nav.next = oddHead.next;
    oddHead.next = null;
    return head;
};