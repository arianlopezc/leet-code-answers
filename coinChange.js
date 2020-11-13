/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount < 1) {
        return 0;
    }
    coins.sort((a, b) => b - a);
    return change(coins, amount, new Map());
};

/**
 * @param {number[]} coins
 * @param {number} remaining
 * @param {Map} counting
 * @return {number}
 */
function change(coins, remaining, counting) {
    if (remaining < 0) {
        return -1;
    }
    if (remaining === 0) {
        return 0;
    }
    if (counting.has(remaining - 1)) {
        return counting.get(remaining - 1);
    }
    let smallest = Infinity;
    for (const coin of coins) {
        const returned = change(coins, remaining - coin, counting);
        if (returned >= 0 && returned < smallest) {
            smallest = 1 + returned;
        }
    }
    counting.set(remaining - 1, smallest === Infinity ? -1 : smallest);
    return counting.get(remaining - 1);
}