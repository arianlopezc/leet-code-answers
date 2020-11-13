/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let totalA = 0;
    let totalL = 0;
    let lastLIndex = -1;
    for (let index = 0; index < s.length && totalA < 2 && totalL < 3; index++) {
        if (s[index] === 'A')
            totalA++;
        if (s[index] === 'L') {
            if (lastLIndex + 1 === index) {
                totalL++;
            } else {
                totalL = 1;
            }
            lastLIndex = index;
        }
    }
    return totalA < 2 && totalL < 3;
};