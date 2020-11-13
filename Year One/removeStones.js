function removeStones(stones) {
    let totalMoves = 0;
    let visitedStones = {};
    let stack = [];
    for (let stone of stones) {
        if (!visitedStones[`${stone[0]}${stone[1]}`]) {
            stack.push(stone);
            visitedStones[`${stone[0]}${stone[1]}`] = true;
        }
        while (stack.length > 0) {
            const stackedStone = stack.pop();
            for (let adjacent of stones) {
                if ((adjacent[0] === stackedStone[0] || adjacent[1] === stackedStone[1])
                    && !(adjacent[0] === stackedStone[0] && adjacent[1] === stackedStone[1])
                    && !visitedStones[`${adjacent[0]}${adjacent[1]}`]) {
                    stack.push(adjacent);
                    visitedStones[`${adjacent[0]}${adjacent[1]}`] = true;
                    totalMoves++;
                }
            }
        }
    }
    return totalMoves;
}
