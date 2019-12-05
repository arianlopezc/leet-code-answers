/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    const visitedFriends = new Map();
    let count = 0;
    for (let indexNode = 0; indexNode < M.length; indexNode++) {
        if (!visitedFriends.has(indexNode)) {
            visitedFriends.set(indexNode);
            count++;
            const children = [indexNode];
            while (children.length > 0) {
                const childIndex = children.shift();
                for (let indexChildren = 0; indexChildren < M[childIndex].length; indexChildren++) {
                    if (M[childIndex][indexChildren] === 1 && !visitedFriends.has(indexChildren)) {
                        visitedFriends.set(indexChildren);
                        children.push(indexChildren);
                    }
                }
            }
        }
    }
    return count;
};