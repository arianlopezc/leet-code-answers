var networkDelayTime = function(times, N, K) {
    let map = {};
    times.forEach(item => {
        if (!map[item[0]]) {
            map[item[0]] = {};
        }
        map[item[0]][item[1]] = item[2];
    });
    let distanceMap = {};
    distanceMap[K] = 0;
    let totalTreated = 1;
    let queue = [K];
    while (queue.length > 0) {
        let node = queue.pop();
        const distanceToNode = distanceMap[node];
        for (let child in map[node]) {
            if (distanceMap[child] === undefined) {
                totalTreated++;
                distanceMap[child] = distanceToNode + map[node][child];
                queue.unshift(child);
            } else {
                const childChildren = map[child] ? Object.keys(map[child]) : [];
                const visitedChildren = childChildren.length === 0 || distanceMap[childChildren[0]] === undefined ? false : true;
                if (!visitedChildren && distanceMap[child] > distanceToNode + map[node][child]) {
                    distanceMap[child] = distanceToNode + map[node][child];
                    queue.unshift(child);
                }
            }
        }
    }
    return totalTreated !== N ? -1 : Math.max(...(Object.values(distanceMap)));
};