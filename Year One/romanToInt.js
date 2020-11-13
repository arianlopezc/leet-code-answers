/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let convertedNumber = 0;
    if (s.length > 0) {
        const romanNumerals = initRomanNumeralsMap();
        for (let index = 0; index < s.length - 1; index++) {
            if (romanNumerals.get(s[index]) < romanNumerals.get(s[index + 1])) {
                convertedNumber -= romanNumerals.get(s[index]);
            } else
                convertedNumber += romanNumerals.get(s[index]);
        }
        convertedNumber += romanNumerals.get(s[s.length - 1]);
    }
    return convertedNumber;
};

function initRomanNumeralsMap() {
    const map = new Map();
    map.set('I', 1);
    map.set('V', 5);
    map.set('X', 10);
    map.set('L', 50);
    map.set('C', 100);
    map.set('D', 500);
    map.set('M', 1000);
    return map;
}