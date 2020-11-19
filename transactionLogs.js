/*
 * Complete the 'processLogs' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY logs
 *  2. INTEGER threshold
 */

 /**
 * @param {string[]} logs
 * @param {number} threshold
 * @return {string[]}
 */
function processLogs(logs, threshold) {
    if (logs.length === 0) {
        return [];
    }
    const instancesCalled = new Map();
    for (const log of logs) {
        const splittedLog = log.split(' ');
        addToMap(instancesCalled, splittedLog[0]);
        if (splittedLog[0] !== splittedLog[1]) {
            addToMap(instancesCalled, splittedLog[1]);
        }
    }
    const logsOverThreshold = [];
    for (const instance of instancesCalled) {
        if (instance[1] >= threshold) {
            logsOverThreshold.push(instance[0]);
        }
    }
    logsOverThreshold.sort((a, b) => parseInt(a) - parseInt(b));
    return logsOverThreshold;
}

function addToMap(map, clientId) {
    if (map.has(clientId)) {
        map.get(clientId)++;
    } else {
        map.set(clientId, 1);
    }
}