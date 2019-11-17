/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    if (strs.length === 0)
        return 'ā';
    const joint = strs.join('ā');
    return joint;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    if (s === 'ā')
        return [];
    const splited = s.split('ā');
    return splited;
};