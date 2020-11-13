/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    const converted = x.toString();
    const inverted = converted.split('').reverse().join('');
    return converted === inverted;
};