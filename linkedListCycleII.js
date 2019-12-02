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
var detectCycle = function(head) {
    if (!head)
        return null;
    else {
        const map = new Map();
        while (head.next) {
            if (map.has(head))
                return head;
            map.set(head);
            head = head.next;
        }
        return null;
    }
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}