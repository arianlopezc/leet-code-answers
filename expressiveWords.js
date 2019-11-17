function isWordExpressive(S, word) {
    let allCovered = false;
    let indexS = 0
    let indexWord = 0
    while (!allCovered) {
        if (S[indexS] !== word[indexWord]) return false;
        let totalS = 0;
        const referenceChar = S[indexS];
        for (; indexS < S.length && referenceChar === S[indexS]; indexS++) {
            totalS++;
        }
        let totalWord = 0;
        for (; indexWord < word.length && referenceChar === word[indexWord]; indexWord++) {
            totalWord++;
        }
        if (totalS < totalWord) return false;
        if (totalS < 3 && totalS !== totalWord) return false;
        allCovered = indexWord === word.length && indexS === S.length ? true : false;
    }
    return true;
}

var expressiveWords = function(S, words) {
    if (S.length === 0 || words.length === 0) return 0;
    let totalExpressiveWords = 0;
    for (let word of words) {
        if (word.length <= S.length) {
            if (isWordExpressive(S, word)) totalExpressiveWords++;
        }
    }
    return totalExpressiveWords;
};
