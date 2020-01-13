/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let indexLeft = 0;
    let indexRight = s.length - 1;
    return isPalindrome(s, 1, indexLeft, indexRight);
};

/**
 * @param {string} word
 * @return {boolean}
 */
function isPalindrome(word, skips, indexLeft, indexRight) {
    while (indexLeft <= indexRight) {
        if (word[indexLeft] !== word[indexRight]) {
            if (skips === 0) {
                return false;
            } else {
                skips--;
                const leftWord = word.slice(0, indexLeft) + word.slice(indexLeft + 1);
                const rightWord = word.slice(0, indexRight) + word.slice(indexRight + 1);
                const leftPalindrome = isPalindrome(leftWord, skips, indexLeft, indexRight - 1);
                const rightPalindrome = isPalindrome(rightWord, skips, indexLeft, indexRight - 1);
                return leftPalindrome || rightPalindrome;
            }
        }
        indexLeft++;
        indexRight--;
    }
    return true;
}