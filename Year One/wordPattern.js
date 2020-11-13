/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    str = str.split(' ');
    if (str.length !== pattern.length)
        return false;
    const map = new Map();
    let index = 0;
    for (let letter of pattern) {
        if (!map.has(letter) && !map.has(str[index])) {
            map.set(letter, str[index]);
            map.set(str[index], letter);
        } else {
            if (map.get(letter) !== str[index] || map.get(str[index]) !== letter)
                return false;
        }
        index++;
    }
    return true;
};