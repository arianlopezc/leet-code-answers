function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let finalList = new ListNode(-1);
    let navigator = finalList;
    while ((l1 && l1 !== null) || (l2 && l2 !== null)) {
        let firstItem = l1 && l1 !== null ? l1 : undefined;
        let secondItem = l2 && l2 !== null ? l2 : undefined;
        if (!firstItem || (secondItem && firstItem.val > secondItem.val)) {
            navigator.next = new ListNode(secondItem.val);
            l2 = l2.next;
        }
        if (!secondItem || (firstItem && secondItem.val > firstItem.val)) {
            navigator.next = new ListNode(firstItem.val);
            l1 = l1.next;
        }
        if (firstItem && secondItem && firstItem.val === secondItem.val) {
            navigator.next = new ListNode(firstItem.val);
            navigator.next.next = new ListNode(secondItem.val);
            navigator = navigator.next;
            l1 = l1.next;
            l2 = l2.next;
            
        }
        navigator = navigator.next;
    }
    return finalList.next;
};

let n1 = new ListNode(3);
let n2 = new ListNode(2);
mergeTwoLists(n1, n2);
