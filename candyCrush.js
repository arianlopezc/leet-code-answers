/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function(board) {
    const R = board.length;
    const C = board[0].length;
    let todo = false;
    for (let r = 0; r < R; ++r) {
        for (let c = 0; c + 2 < C; ++c) {
            let v = Math.abs(board[r][c]);
            if (v != 0 && v == Math.abs(board[r][c+1]) && v == Math.abs(board[r][c+2])) {
                board[r][c] = board[r][c+1] = board[r][c+2] = -v;
                todo = true;
            }
        }
    }
    for (let r = 0; r + 2 < R; ++r) {
        for (let c = 0; c < C; ++c) {
            let v = Math.abs(board[r][c]);
            if (v != 0 && v == Math.abs(board[r+1][c]) && v == Math.abs(board[r+2][c])) {
                board[r][c] = board[r+1][c] = board[r+2][c] = -v;
                todo = true;
            }
        }
    }
    for (let c = 0; c < C; ++c) {
        let wr = R - 1;
        for (let r = R-1; r >= 0; --r)
            if (board[r][c] > 0)
                board[wr--][c] = board[r][c];
        while (wr >= 0)
            board[wr--][c] = 0;
    }

    return todo ? candyCrush(board) : board;
};