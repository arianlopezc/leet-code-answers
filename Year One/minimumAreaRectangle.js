/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
    const mapX = {};
    for (const point of points) {
        const x = point[0];
        const y = point[1];
        if (!mapX[x]) mapX[x] = {};
        mapX[x][y] = true;
    }
    let minimumArea = Infinity;
    for (let [point1x, point1y] of points) {
        for (let [point2x, point2y] of points) {
            if (point1x !== point2x && point1y !== point2y) {
                if (mapX[point1x][point2y] && mapX[point2x][point1y])
                    minimumArea = Math.min(minimumArea, (Math.abs(x1-x2) * Math.abs(y1-y2)));
            }
        }
    }
    return minimunArea === Infinity ? 0 : minimunArea;
};