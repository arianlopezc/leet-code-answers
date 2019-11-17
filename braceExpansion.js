var expand = function(S) {
    const wordParenthesisStack = [];
    const individualLetters = [];
    let onParenthesis = false;
    let wordParenthesis = [];
    for (const letter of S) {
        if (letter === '{') onParenthesis = true;
        else if (letter === '}') {
            onParenthesis = false;
            wordParenthesisStack.push(wordParenthesis);
            wordParenthesis = [];
        } else if (letter !== ',' && onParenthesis) wordParenthesis.push(letter);
        else if (letter !== ',') {
            individualLetters.push(letter);
        }
    }
    if (wordParenthesisStack.length === 0)
        return individualLetters;
    
};

console.log(expand("{a,b}c{d,e}f"));