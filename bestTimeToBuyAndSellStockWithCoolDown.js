/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    /**
     * @param {number} startIndex
     * @return {number}
     */
    function extract(startIndex, profitSoFar) {
        if (startIndex >= prices.length - 1) {
            if (profitSoFar > maxProftability)
                maxProftability = profitSoFar;
        } else {
            let minValue = Infinity;
            let stop = false;
            let setProfit = 0;
            for (; startIndex < prices.length && !stop; startIndex++) {
                if (prices[startIndex] <= minValue) {
                    minValue = prices[startIndex];
                } else if (prices[startIndex] > minValue) {
                    if (prices[startIndex] - minValue > setProfit)
                        setProfit = prices[startIndex] - minValue;
                    extract(startIndex + 2, setProfit + profitSoFar);
                }
            }
            if (profitSoFar > maxProftability)
                maxProftability = profitSoFar;
        }
    }
    let maxProftability = 0;
    extract(0, 0);
    return maxProftability;
};