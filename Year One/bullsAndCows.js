var getHint = function(secret, guess) {
    let mapSecret = {};
    let mapGuess = {};
    let cows = 0;
    let bulls = 0;
    for (let number in secret) {
        if (secret[number] === guess[number]) bulls++;
        else {
            if (mapSecret[secret[number]] === undefined || mapSecret[secret[number]] === 0)
                mapSecret[secret[number]] = 1;
            else mapSecret[secret[number]]++;
            if (mapGuess[guess[number]] === undefined || mapGuess[guess[number]] === 0) 
                mapGuess[guess[number]] = 1;
            else mapGuess[guess[number]]++;
            if (mapSecret[guess[number]] > 0) {
                cows++;
                mapSecret[guess[number]]--;
                mapGuess[guess[number]]--;
            }
            if (mapGuess[secret[number]] > 0) {
                cows++;
                mapSecret[secret[number]]--;
                mapGuess[secret[number]]--;
            }
        }
    }
    return `${bulls}A${cows}B`;
};

console.log(getHint("9305","9305"));