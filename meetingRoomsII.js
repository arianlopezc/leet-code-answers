/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var minMeetingRooms = function(intervals) {
    if (intervals.length === 1) {
        return 1;
    }
    if (intervals.length === 0) {
        return 1;
    }
    intervals.sort((a, b) => a[0] - b[0]);
    let totalRequired = 1;
    let currentlyOverlapping = [];
    for (let index = 1; index < intervals.length; index++) {
        if (intervals[index - 1][1] > intervals[index][0]) {
            if (currentlyOverlapping.length === 0) {
                currentlyOverlapping = [intervals[index - 1], intervals[index]];
            } else {
                updateOverlap(currentlyOverlapping, intervals[index - 1]);
                updateOverlap(currentlyOverlapping, intervals[index]);
            }
            totalRequired = Math.max(currentlyOverlapping.length, totalRequired);
        }
    }
    return totalRequired;
};

/**
 * @param {number[][]} currentlyOverlapping
 * @param {number[]} newInterval
 */
function updateOverlap(currentlyOverlapping, newInterval) {
    for (let overlapIndex = 0; overlapIndex < currentlyOverlapping.length; overlapIndex++) {
        if (currentlyOverlapping[overlapIndex][1] < newInterval[0]) {
            currentlyOverlapping = currentlyOverlapping.splice(overlapIndex, 1);
        }
    }
    if (currentlyOverlapping[currentlyOverlapping.length - 1][0] !== newInterval[0]
        || currentlyOverlapping[currentlyOverlapping.length - 1][1] !== newInterval[1]) {
        currentlyOverlapping.push(newInterval);
    }
}

minMeetingRooms([[9,10],[4,9],[4,17]]);