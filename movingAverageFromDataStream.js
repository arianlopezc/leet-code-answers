/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.window = size;
    this.numbers = [];
    this.total = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.numbers.push(val);
    if (this.numbers.length > this.window) {
        const latestNumber = this.numbers.shift();
        this.total -= latestNumber;
    }
    this.total += val;
    return this.total / this.numbers.length;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */