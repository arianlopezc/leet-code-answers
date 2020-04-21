/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let lo = 0, hi = 0;
       for (let c of s.split('')) {
           lo += c == '(' ? 1 : -1;
           hi += c != ')' ? 1 : -1;
           if (hi < 0) break;
           lo = Math.max(lo, 0);
       }
       return lo == 0;
};