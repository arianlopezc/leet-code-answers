function f(s) {
    const splittedString = String(s).split("");
    const map = {};
    let smallest = undefined;
    for (let character of splittedString) {
        const index = character.charCodeAt(0);
        map[index] = map[index] ?
            map[index] + 1 : 1;
        if (!smallest || smallest > index) smallest = index;
    }
    return map[smallest];
}

function numSmallerByFrequency(queries, words) {
    queries = queries.map(querie => f(querie));
    words = words.map(word => f(word));
    const response = queries.map(querie => {
        let positionIndex;
        let total = 0;
        for (positionIndex = words.length - 1; positionIndex >= 0; positionIndex--) {
            if (words[positionIndex] <= querie) {
                stop = true;
            } else {
                total++;
            }
        }
        return total;
    });
    return response;
}