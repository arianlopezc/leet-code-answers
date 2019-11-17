/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const map = {};
    for (let row of board) {
        for (let letter of row) {
            if (!map[letter]) map[letter] = 0;
            map[letter]++;
        }
    }
    for (let letter of word) {
        if (!map[letter]) return false;
        map[letter]--;
        if (map[letter] < 0) return false;
    }
    return true;
};