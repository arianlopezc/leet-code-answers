/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = 0;
    while (x != 0) {
        let pop = x % 10;
        x /= 10;
        if (rev > Infinity / 10 || (rev === Infinity / 10 && pop > 7)) return 0;
        if (rev < (-1 * Infinity) / 10 || (rev === (-1 * Infinity) / 10 && pop < -8)) return 0;
        rev = rev * 10 + pop;
    }
    return rev;
};

console.log(reverse(-123));