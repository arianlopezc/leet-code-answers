/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const mappingResult = new Map();
    for (let word of strs) {
        const sortedWord = word.split('').sort((charA, charB) => {
            return charA < charB ? -1 : charA > charB ? 1 : 0;
        }).join('');
        if (mappingResult.has(sortedWord)) {
            mappingResult.get(sortedWord).push(word);
        } else {
            mappingResult.set(sortedWord, [word]);
        }
    }
    return [ ...mappingResult.values() ];
};

console.log(JSON.stringify(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])));