function calculateManhattanDistance(pointOne, pointTwo) {
    const distance = Math.abs(pointOne[0] - pointTwo[0]) + Math.abs(pointOne[1] - pointTwo[1]);
    return distance;
}

function campusBikes(workers, bikes) {
    let distancesToBikes = {};
    for (let indexWorker = 0; indexWorker < workers.length; indexWorker++) {
        for (let indexBike = 0; indexBike < bikes.length; indexBike++) {
            const distance = calculateManhattanDistance(workers[indexWorker], bikes[indexBike]);
            distancesToBikes[`${distance}${indexWorker}${indexBike}`] = {
                distance,
                indexWorker,
                indexBike
            }
        }
    }
    let usedBikes = {};
    let assignmentWorkersBikes = new Array(workers.length).fill(-1);
    for (let indexDistance in distancesToBikes) {
        let distance = distancesToBikes[indexDistance];
        if (assignmentWorkersBikes[distance.indexWorker] === -1 && !usedBikes[distance.indexBike]) {
            assignmentWorkersBikes[distance.indexWorker] = distance.indexBike;
            usedBikes[distance.indexBike] = true;
        }
    }
    return assignmentWorkersBikes;
}