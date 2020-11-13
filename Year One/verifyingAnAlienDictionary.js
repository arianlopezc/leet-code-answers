/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    if (words.length <= 1)
        return true;
    const hashedLetters = new Map();
    let value = 1;
    for (let letter of order) {
        hashedLetters.set(letter, value);
        value++;
    }
    for (let indexFirstWord = 0; indexFirstWord < words.length - 1; indexFirstWord++) {
        const firstWord = words[indexFirstWord];
        const secondWord = words[indexFirstWord + 1];
        const length = firstWord.length < secondWord.length ? firstWord.length : secondWord.length;
        let continueComparison;
        let indexCompare = 0
        do {
            continueComparison = false;
            const valueFirstLetter = hashedLetters.get(firstWord[indexCompare]);
            const valueSecondLetter = hashedLetters.get(secondWord[indexCompare]);
            if (valueFirstLetter > valueSecondLetter) {
                return false;
            } else if (valueFirstLetter === valueSecondLetter) {
                continueComparison = true;
                if (indexCompare + 1 === length && firstWord.length > secondWord.length) {
                    return false;
                }
            }
            indexCompare++;
        } while (indexCompare < length && continueComparison);
    }
    return true;
};