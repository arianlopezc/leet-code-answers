/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.initial = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.initial;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const shuffled = new Array(this.initial.length);
    const length = this.initial.length;
    for (let index = 0; index < length; index++) {
        let newIndex = undefined;
        do {
            newIndex = Math.floor(Math.random() * Math.floor(length));
        } while (typeof shuffled[newIndex] !== 'undefined')
        shuffled[newIndex] = this.initial[index];
    }
    return shuffled;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */var obj = new Solution([1,2,3,4,5])
 var param_1 = obj.reset()
var param_2 = obj.shuffle()