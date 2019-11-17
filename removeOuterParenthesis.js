/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    if (S.length === 0) return "";
    let cleanedPrimitive = '';
    let primitive = '';
    let opens = 0;
    for (let letter of S) {
        if (letter === '(')
            opens++;
        else
            opens--;
        primitive += letter;
        if (opens === 0) {
            cleanedPrimitive += primitive.substring(1, primitive.length - 1);
            primitive = '';
        }
    }
    return cleanedPrimitive;
};