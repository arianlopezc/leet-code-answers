var canConvert = function(str1, str2) {
    if (str1 === str2) return true;
    const map = {};
    for (let charIndex in str1) {
        if (!map[str1[charIndex]])
            map[str1[charIndex]] = str2[charIndex];
        else if (map[str1[charIndex]] !== str2[charIndex])
            return false;
    }
    return new Set(str2).size < 26;
};