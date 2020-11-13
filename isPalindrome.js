/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let firstHalf = [];
    let secondHalf = [];
    while (head) {
        secondHalf.push(head.val);
        if (firstHalf.length < secondHalf.length) {
            firstHalf.push(secondHalf.shift());
        }
        head = head.next;
    }
    if (firstHalf.length > secondHalf.length) {
        firstHalf.pop();
    }
    return secondHalf.reverse().join('') === firstHalf.join('');
};

