/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = true;
    for (let index = digits.length - 1; index >= 0; index--) {
        let added = digits[index];
        if (carry) {
            added++;
        }
        if (added >= 10) {
            digits[index] = 0;
            carry = true;
        } else {
            carry = false;
            digits[index] = added;
            return digits;
        }
    }
    digits.unshift(1)
    return digits;
};