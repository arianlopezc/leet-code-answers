/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length <= 1)
        return strs.pop();
    const word = strs.pop();
    let keepGoing = true;
    let limit = 0;
    for (; limit < word.length && keepGoing; limit++) {
        for (let remainIndex = 0; remainIndex < strs.length && keepGoing; remainIndex++) {
            if (strs[remainIndex][limit] !== word[limit]) {
                keepGoing = false;
            }
        }
    }
    return !keepGoing ? word.substring(0, --limit) : word.substring(0, limit);
};