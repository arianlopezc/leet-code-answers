var crackSafe = function(n, k) {
    function dfs(node, k) {
        for (let idx = 0; idx < k && trail.length < n + 1; idx++) {
            let edge = node + String(idx);
            if (!visited[edge]) {
                visited[edge] = true;
                trail += idx;
                dfs(idx, k);
            }
        }
    }
    let visited = {};
    visited["00"] = true;
    if (n === 1 && k === 1) return "0";
    let trail = "0";
    dfs("0", k);
    return trail;
};

console.log(crackSafe(2,2));