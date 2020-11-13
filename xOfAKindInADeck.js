/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    const map = new Map();
    for (let card of deck) {
        let total = map.get(card);
        total = total ? total + 1 : 1;
        map.set(card, total);
    }
    const iterator = map.values();
    let next;
    let gcdValue;
    do {
        next = iterator.next();
        gcdValue = !gcdValue ? next.value : greatestCommonDivisor(next.value, gcdValue);
    } while (!next.done)
    return gcdValue >= 2;
};

function greatestCommonDivisor(x, y) {
    return !y ? x : greatestCommonDivisor(y, x % y);
}