/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let happy = false;
    let stop = false;
    const visited = new Map();
    visited.set(n, n);
    let number = n < 10 ? n * 10 : n;
    while (!stop) {
        const conv = number.toString().split('').map(x => parseInt(x, 10));
        const newTotal = conv.reduce((prev, cur) => {
            return Math.pow(prev, 2) + Math.pow(cur, 2);
        });
        if (newTotal === 1) {
            stop = true;
            happy = true;
        }
        if (visited.has(newTotal)) {
            stop = true;
        } else {
            visited.set(newTotal, newTotal);
        }
        number = newTotal;
    }
    return happy;
};

isHappy(78);