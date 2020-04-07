/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    const existing = new Map();
    let total = 0;
    for (let number of arr) {
        if (existing.has(number)) {
            const existT = existing.get(number);
            existing.set(number, existT + 1);
        } else {
            existing.set(number, 1);
        }
        const prev = number - 1;
        if (existing.has(prev)) {
            let prevT = existing.get(prev);
            if (prevT > 0) {
                prevT;
                existing.set(prev, 0);
                total += prevT;
            }
        } 
        const next = number + 1;
        if (existing.has(next)) {
            const existT = existing.get(number);
            existing.set(number, 0);
            total += existT;
        }
    }
    return total;
};

countElements([1,1,2,2]);