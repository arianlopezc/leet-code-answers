/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    if (cost.length === 0) return 0 ;
    if (cost.length <= 2) return Math.min(...cost);
    const start = -1;
    const minPath = navigate(start, cost, 0);
    return minPath;
};

function navigate(position, cost, sum) {
    const first = position + 1;
    const second = position + 2;
    if (position >= cost.length) return sum + 0;
    if (position === cost.length - 1) return sum + cost[position];
    let firstTotal = Infinity;
    if (first <= cost.length) {
        firstTotal = navigate(first, cost, position >= 0 ? sum + cost[position] : sum);
    }
    let secondTotal = Infinity;
    if (second <= cost.length) {
        secondTotal = navigate(second, cost, position >= 0 ? sum + cost[position] : sum);
    }
    return Math.min(firstTotal, secondTotal);
}

console.log(minCostClimbingStairs([0,0,0,0]));