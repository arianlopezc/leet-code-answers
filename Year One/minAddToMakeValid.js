/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    if (S.length === 0) return 0;
    let stack = [];
    for (let letter of S) {
        if (letter === '(') {
            stack.push(letter);
        } else {
            const lastLetter = stack.pop();
            if (lastLetter !== '(') {
                if (lastLetter) stack.push(lastLetter);
                stack.push(letter);
            }
        }
    }
    return stack.length;
};