/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minValue = Infinity;
    let maxProftability = 0;
    for (let price of prices) {
        if (price < minValue) {
            minValue = price;
        } else {
            maxProftability = Math.max(maxProftability, price - minValue);
        }
    }
    return maxProftability;
}
