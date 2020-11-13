/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = new Map();
    for (let letter of t) {
        const total = map.get(letter);
        if (total)
            map.set(letter, total + 1);
        else
            map.set(letter, 1);
    }
    let total = 0;
    for (let letter of s) {
        const val = map.get(letter);
        if (!val) {
            return false;
        } else {
            map.set(letter, val - 1);
            if (val < 0) {
                return false;
            } else {
                total++;
            }
        }
    }
    return total === t.length;
};