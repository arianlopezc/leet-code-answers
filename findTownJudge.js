/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    const connections = new Map();
    const trusters = new Map();
    const possibleJudges = new Map();
    for (let bridge of trust) {
        trusters.set(bridge[0], true);
        if (!connections.has(bridge[1]))
            connections.set(bridge[1], 0);
        const total = connections.get(bridge[1]) + 1;
        connections.set(bridge[1], total);
        if (total === N - 1)
            possibleJudges.set(bridge[1], true);
    }
    for (let possibleJudge of possibleJudges) {
        if (!trusters.has(possibleJudge[0]))
            return possibleJudge[0];
    }
    return -1;
};