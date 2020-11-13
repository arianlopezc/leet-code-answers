/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */
var assignBikes = function(workers, bikes) {
    let visitedBikes = {};
    let biggestSmallestDistance = Infinity;
    function navigate(worker, distance) {
        if (worker === workers.length) {
            biggestSmallestDistance = Math.min(biggestSmallestDistance, distance);
        } else {
            for (let bike of bikes) {
                if (!visitedBikes[`${bike[0]}${bike[1]}`]) {
                    visitedBikes[`${bike[0]}${bike[1]}`] = true;
                    let distanceToBike = calculateManhattanDistance(workers[worker], bike);
                    navigate(worker + 1, distance + distanceToBike);
                    visitedBikes[`${bike[0]}${bike[1]}`] = false;
                }
            }
        }
    }
    navigate(0, 0);
    return biggestSmallestDistance;
};

function calculateManhattanDistance(pointA, pointB) {
    return Math.abs(pointA[0] - pointB[0]) + Math.abs(pointA[1] - pointB[1]);
}