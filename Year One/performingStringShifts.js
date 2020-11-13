/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
    if (s.length === 1) return s;
    let position = 0;
    while (shift.length > 0) {
        const comb = shift.shift();
        if (comb[0] === 0) {
            position = position - comb[1];
        } else {
            position = position + comb[1];
        }
    }
    if (position !== 0) {
        let abs = Math.abs(position) > s.length ? Math.abs(position) % s.length : Math.abs(position);
        const direction = position > 0 ? true : false;
        let splitted = s.split('');
        while (abs > 0) {
            if (direction) {
                splitted.unshift(splitted.pop());
            } else {
                splitted.push(splitted.shift());
            }
            abs--;
        }
        s = splitted.join('');
    }
    return s;
};
