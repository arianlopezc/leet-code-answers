/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
    let currentPosition = {
        row: 0,
        col: 0,
    };
    let index = 0;
    let path = '';
    while (index < target.length) {
        let steps = '';
        const letterPositionInMatrix = getCharacterCoordinates(target, index);
        if (currentPosition.row !== letterPositionInMatrix.row || currentPosition.col !== letterPositionInMatrix.col) {
            if (currentPosition.row === 5 && currentPosition.col === 0) {
                steps = `${getRow(currentPosition, letterPositionInMatrix)}${getCol(currentPosition, letterPositionInMatrix)}`;
            } else {
                if (letterPositionInMatrix.row === 5 && letterPositionInMatrix.col === 0) {
                    steps = `${getCol(currentPosition, letterPositionInMatrix)}${getRow(currentPosition, letterPositionInMatrix)}`;
                } else {
                    steps = `${getRow(currentPosition, letterPositionInMatrix)}${getCol(currentPosition, letterPositionInMatrix)}`;
                }
            }
            currentPosition = letterPositionInMatrix;
        }
        index++;
        path += `${steps}!`;
    }
    return path;
};

/**
 * @param {string} target
 * @param {number} index
 * @return {{row,col}}
 */
function getCharacterCoordinates(target, index) {
    const charCode = target.charCodeAt(index) - 96;
    const row = Math.ceil(charCode / 5) - 1;
    const col = charCode > 5 ? charCode % 5 === 0 ? 4 : charCode % 5 - 1 : charCode - 1;
    return {
        row, col,
    };
}

/**
 * @param {{row,col}} currentPosition
 * @param {{row,col}} letterPositionInMatrix
 * @return {string}
 */
function getCol(currentPosition, letterPositionInMatrix) {
    let colChain = '';
    if (currentPosition.col < letterPositionInMatrix.col) {
        colChain = 'R'.repeat(letterPositionInMatrix.col - currentPosition.col);
    } else if (letterPositionInMatrix.col < currentPosition.col) {
        colChain = 'L'.repeat(currentPosition.col - letterPositionInMatrix.col);
    }
    return colChain;
}

/**
 * @param {{row,col}} currentPosition
 * @param {{row,col}} letterPositionInMatrix
 * @return {string}
 */
function getRow(currentPosition, letterPositionInMatrix) {
    let rowChain = '';
    if (currentPosition.row < letterPositionInMatrix.row) {
        rowChain = 'D'.repeat(letterPositionInMatrix.row - currentPosition.row);
    } else if (letterPositionInMatrix.row < currentPosition.row) {
        rowChain = 'U'.repeat(currentPosition.row - letterPositionInMatrix.row);
    }
    return rowChain;
}