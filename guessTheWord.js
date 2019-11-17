function getTotalMatchCharacters(word1, word2) {
    let totalMatch = 0;
    for (let index in word1) {
        if (word1[index] === word2[index])
        totalMatch++;
    }
    return totalMatch;
}

function getMapOfNotMatchingWords(wordlist) {
    let map = {};
    for (const wordInWordList of wordlist) {
        for (const subWordInWordList of wordlist) {
            if (getTotalMatchCharacters(wordInWordList, subWordInWordList) === 0) {
                if (!map[wordInWordList]) map[wordInWordList] = 0;
                map[wordInWordList]++;
            }
        }
    }
    return map;
}

var findSecretWord = function(wordlist, master) {
    let foundMatches = 0;
    for (let totalCallsToMaster = 0; totalCallsToMaster < 10 && foundMatches < 6; totalCallsToMaster++) {
        let map = getMapOfNotMatchingWords(wordlist);

        let minWord = undefined;
        let minWordRepeated = Infinity;
        for (const word of wordlist) {
          if (!map[word]) map[word] = 0;
          if (map[word] < minWordRepeated) {
            minWord = word;
            minWordRepeated = map[word];
          }
        }

        foundMatches = master.guess(minWord);
        const newWords = [];
        for (const word of wordlist) {
            if (getTotalMatchCharacters(minWord, word) === foundMatches) {
                newWords.push(word);
            }
        }
        wordlist = newWords;
    }
    return;
};