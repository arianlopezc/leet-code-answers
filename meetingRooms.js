/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    if (intervals.length <= 1) {
        return true;
    }
    intervals.sort((a, b) => a[0] - b[0]);
    for (let index = 0; index <= intervals.length - 2; index++) {
        if (intervals[index][1] > intervals[index + 1][0]) {
            return false;
        }
    }
    return true;
};