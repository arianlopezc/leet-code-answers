/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    if (S.length <= 1) return S;
    const reversed = new Array(S.length);
    let nextLetter = S.length - 1;
    for (let index = 0; index < S.length; index++) {
        if (!isLetter(S[index])) {
            reversed[index] = S[index];
        } else {
            const letterToMove = getNextLetter();
            reversed[index] = letterToMove;
        }
    }
    return reversed.join('');

    function isLetter(possibleLetter) {
        return /^[a-zA-Z]+$/.test(possibleLetter);
    }
    
    function getNextLetter() {
        let letter = undefined;
        for (; nextLetter >= 0 && !letter; nextLetter--) {
            if (isLetter(S[nextLetter]))
                letter = S[nextLetter];
        }
        return letter;
    }
};