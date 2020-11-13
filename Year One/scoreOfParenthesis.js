/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
    if (S.length === 0) return 0;
    let total = 0;
    let open = 0;
    let inner = 0;
    for (let letter of S) {
        if (letter === '(') {
            open++;
            if (open > 1) {
                inner++;
            }
        } else {
            open--;
            if (open > 1) inner--;
            total += 1 + inner;
        }
    }
    return total;
};

console.log(scoreOfParentheses('(()(()))'));