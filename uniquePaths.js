/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let carry = [];
    for(let i = 1; i <= m; i++) {
        for(let j = 1; j <= n; j++){
            if (i === 1 || j === 1)
                carry[j] = 1;
            if (i !== 1&& j !== 1)
                carry[j] += carry[j - 1];
        }
    }
    return carry[n];
};