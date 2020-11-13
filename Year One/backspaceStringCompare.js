function backspaceStringCompare(S, T) {
    let wordOne = getCleanWord(S);
    let wordTwo = getCleanWord(T);
    return wordOne === wordTwo;
}

/**
 * @param {string} word
 */
function getCleanWord(word) {
    for (let index = 0; index < word.length; index++) {
        if (word[index] === '#') {
            if (index > 0) {
                word = word.slice(0, index - 1) + word.slice(index + 1);
                index -= 2;
            } else {
                word = word.slice(index + 1);
            }
        }
    }
    return word;
}