/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if (s.length === 0 || p.length > s.length)
        return [];
    let mapP = initMap(new Map(), p);
    const result = [];
    let checked = 0;
    let lastValidInit = 0;
    let triggeredLast = false;
    for (let index = 0; index < s.length; index++) {
        const letter = s[index];
        let current = mapP.get(letter);
        if (!triggeredLast) {
            triggeredLast = true;
            lastValidInit = index;
        }
        if (current) {
            checked++;
            current--;
            if (current < 0) {
                mapP = initMap(new Map(), p);
                index = lastValidInit;
            } else {
                mapP.set(letter, current);
                if (checked === p.length) {
                    const allCovered = isMapCompleted(mapP);
                    if (allCovered) {
                        result.push(lastValidInit);
                        index = lastValidInit;
                        checked = 0;
                    }
                    mapP = initMap(new Map(), p);
                }
            }
        } else {
            if (checked > 0)
                mapP = initMap(new Map(), p);
            checked = 0;
            lastValidInit = index + 1;
            triggeredLast = false;
        }
    }
    return result;
};

/**
 * @param {Map} mapP
 * @return {boolean}
 */
function isMapCompleted(mapP) {
    for (let value of mapP.values()) {
        if (value !== 0) {
            return false;
        }
    }
    return true;
}

/**
 * @param {Map} mapP
 * @param {string} p
 * @return {boolean}
 */
function initMap(mapP, p) {
    for (let index = 0; index < p.length; index++) {
        const prev = mapP.get(p[index]);
        mapP.set(p[index], !prev ? 1 : prev + 1);
    }
    return mapP;
}

findAnagrams("babacd", "abc");