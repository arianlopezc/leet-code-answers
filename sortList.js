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
var sortList = function(head) {
    if (!head) {
        return null;
    }
    const toSort = [];
    while (head && head.next) {
        const one = head;
        const two = head.next;
        head = head.next.next;
        two.next = null;
        one.next = null;
        toSort.push(sort(one, two));
    }
    if (toSort.length === 0 && head) {
        return head;
    }
    if (head) {
        toSort.push(head);
    }
    while (toSort.length > 1) {
        toSort.push(sort(toSort.shift(), toSort.shift()));
    }
    return toSort.pop();
};

/**
 * @param {ListNode} firstSeq
 * @param {ListNode} secondSeq
 * @return {ListNode}
 */
function sort(firstSeq, secondSeq) {
    const sortedSeq = new ListNode();
    let navSeq = sortedSeq;
    while (firstSeq || secondSeq) {
        if ((firstSeq && secondSeq && firstSeq.val > secondSeq.val) || (!firstSeq && secondSeq)) {
            navSeq.next = secondSeq;
            secondSeq = secondSeq.next;
            navSeq.next.next = null;
        } else if ((firstSeq && secondSeq) || (firstSeq && !secondSeq)) {
            navSeq.next = firstSeq;
            firstSeq = firstSeq.next;
            navSeq.next.next = null;
        }
        navSeq = navSeq.next;
    }
    return sortedSeq.next;
}