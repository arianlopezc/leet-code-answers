/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    if (name === typed)
        return true;
    else if (name.length === typed.length || name.length > typed.length)
        return false;
    let indexTyped = 0;
    let indexName = 0;
    while (indexName < name.length) {
        if (name[indexName] === typed[indexTyped]) {
            let skippedName = 1;
            indexName++;
            while (indexName < name.length && name[indexName] === name[indexName - 1]) {
                indexName++;
                skippedName++;
            }
            let skippedTyped = 1;
            indexTyped++;
            while (indexTyped < typed.length && typed[indexTyped] === typed[indexTyped - 1]) {
                indexTyped++;
                skippedTyped++;
            }
            if (skippedName > skippedTyped) {
                return false;
            }
        } else {
            return false;
        }
    }
    return indexTyped === typed.length;
};