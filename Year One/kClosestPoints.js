/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    const map = {};
    for (let point of points) {
        const distance = calculateDistance(point);
        map[distance] = point;
    }
    const values = Object.keys(map).map(key => map[key]);
    return values.slice(0, K);
};

function calculateDistance(point) {
    const q1 = point[0];
    const q2 = point[1];
    const p1 = 0;
    const p2 = 0;
    return Math.pow(q1-p1, 2) + Math.pow(q2-p2, 2);
}