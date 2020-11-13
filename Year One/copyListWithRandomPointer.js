/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) {
        return null;
    }
    let newHead = null;
    let newNavigator = newHead;
    const mapped = new Map();
    let navigator = head;
    while (navigator) {
        const newNode = new Node(navigator.val, null, null);
        mapped.set(navigator.val, newNode);
        if (!newNavigator) {
            newNavigator = newNode;
            newHead = newNavigator;
        } else {
            newNavigator.next = newNode;
            newNavigator = newNavigator.next;
        }
        navigator = navigator.next;
    }
    navigator = head;
    while (navigator) {
        const newNode = mapped.get(navigator.val);
        newNode.random = mapped.get(navigator.random.val);
        navigator = navigator.next;
    }
    return newHead;
};

function Node(val,next,random) {
   this.val = val;
   this.next = next;
   this.random = random;
};