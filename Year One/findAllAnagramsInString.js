/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if (s.length === 0 || p.length > s.length)
        return [];
    const result = [];
    for (let index = 0; index <= s.length - p.length;) {
        let map = initializeMap(p);
        const totalMatched = obtainTotalMatching(map, s.substr(index, p.length));
        if (totalMatched === p.length) {
            result.push(index);
            index++;
        } else {
            index += totalMatched > 0 ? totalMatched > 1 ? totalMatched - 1 : 1 : 1;
        }
    }
    return result;
};

/**
 * @param {Map} map
 * @param {string} sub
 * @return {number}
 */
function obtainTotalMatching(map, sub) {
    let total = 0;
    for (let letter of sub) {
        const val = map.get(letter);
        if (!val) {
            return total;
        } else {
            map.set(letter, val - 1);
            if (val < 0) {
                return total;
            } else {
                total++;
            }
        }
    }
    return total;
}

/**
 * @param {string} p
 * @return {Map}
 */
function initializeMap(p) {
    const map = new Map();
    for (let letter of p) {
        const total = map.get(letter);
        if (total)
            map.set(letter, total + 1);
        else
            map.set(letter, 1);
    }
    return map;
}