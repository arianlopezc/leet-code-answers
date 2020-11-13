/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let min = 1;
        let max = n;
        while (min < max) {
            const pivot = min + Math.floor((max - min) / 2);
            const leftInvalid = isBadVersion(min);
            const rightInvalid = isBadVersion(max);
            const pivotInvalid = isBadVersion(pivot);
            if (!pivotInvalid && rightInvalid) {
               min = pivot + 1;
            } else if (pivotInvalid && !leftInvalid) {
                max = pivot;
            }
        }
        return min;
    };
};