/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    let longestTime = 0;
    const visitedNodes = new Set();
    visitedNodes.add(-1);
    let index = 0;
    for (let worker of manager) {
        if (!visitedNodes.has(worker)) {
            let pathTotal = 0;
            let indexNav = index;
            while (indexNav !== -1) {
                pathTotal += informTime[indexNav];
                visitedNodes.add(indexNav);
                indexNav = manager[indexNav];
            }
            longestTime = Math.max(longestTime, pathTotal);
        }
        index++;
    }
    return longestTime;
};