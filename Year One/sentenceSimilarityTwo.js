/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */
var areSentencesSimilarTwo = function(words1, words2, pairs) {
    if (words1.length === 0 && words2.length === words1.length)
        return true;
    const destinationMap = new Map();
    for (let word of words2)
        destinationMap.set(word, true);
    const pairsMap = new Map();
    for (let [first, second] of pairs) {
        if (!pairsMap.has(first))
            pairsMap.set(first, []);
        const firstContains = pairsMap.get(first);
        pairsMap.set(first, [second, ...firstContains]);
        if (!pairsMap.has(second))
            pairsMap.set(second, []);
        const secondContains = pairsMap.get(second);
        pairsMap.set(second, [first, ...secondContains]);
    }
    let similar = true;
    const destinationVisited = new Map();
    for (let index = 0; index < words1.length && similar; index++) {
        if (!destinationMap.has(words1[index])) {
            const visited = new Map();
            let found = false;
            const queue = pairsMap.has(words1[index]) ? pairsMap.get(words1[index]) : [];
            while (queue.length > 0 && !found) {
                const navigator = queue.shift();
                if (navigator === words1[index] && destinationMap.has(navigator)) {
                    found = true;
                    destinationVisited.set(navigator, true);
                } else {
                    if (pairsMap.has(navigator)) {
                        const pairs = pairsMap.get(navigator);
                        visited.set(navigator, true);
                        pairs.forEach(pair => {
                            if (!visited.has(pair))
                                queue.push(pair);
                        });
                    }
                }
            }
            similar = found;
        }
    }
    return similar && destinationVisited.size() === words2.length;
};

console.log(areSentencesSimilarTwo(["great", "acting", "skills"], ["fine", "drama", "talent"], [["great", "good"], ["fine", "good"], ["acting","drama"], ["skills","talent"]]));