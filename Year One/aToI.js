/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var min = -(2 ** 31);
    var max = 2 ** 31 - 1;
    var str = parseInt(str);
    if(!str) return 0;
    else if(str >= max) return max;
    else if(str <= min) return min;
    return str;
};