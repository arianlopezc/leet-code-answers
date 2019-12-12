/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    const newStack = [];
    while (this.stack.length > 0) {
        newStack.push(this.stack.pop());
    }
    newStack.push(x);
    while (newStack.length > 0) {
        this.stack.push(newStack.pop());
    }
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.stack.length > 0 ? this.stack.pop() : undefined;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack.length > 0 ? this.stack[this.stack.length - 1] : undefined;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length === 0;
};