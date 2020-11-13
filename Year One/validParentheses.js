var isValid = function(s) {
    const stack = [];
    let valid = true;
    for (let index = 0; index < s.length && valid; index++) {
        const currentChar = s[index];
        if (currentChar === '(' || currentChar === '[' || currentChar === '{') {
            stack.push(currentChar);
        } else {
            const closeChar = stack.pop();
            if (!closeChar || (closeChar === '(' && currentChar !== ')') || (closeChar === '{' && currentChar !== '}')
                || (closeChar === '[' && currentChar !== ']')) {
                valid = false;
            }
        }
    }
    return stack.length === 0 && valid;
}

console.log(isValid('(]'));