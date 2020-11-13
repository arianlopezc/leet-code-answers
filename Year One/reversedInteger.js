/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const min = Math.pow(2, 31) * -1,
          max = Math.pow(2, 31) - 1,
          reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
    return (reversed >= min && reversed <= max) ? reversed : 0;
};