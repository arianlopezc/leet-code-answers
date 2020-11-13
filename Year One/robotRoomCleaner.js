class Robot {
    move = function() {
        return true;
    };
    turnLeft = function() {
        return;
    };
    turnRight = function() {
        return;
    };
    clean = function() {
        return;
    };
};

function goBack(robot) {
    robot.turnRight();
    robot.turnRight();
    robot.move();
    robot.turnRight();
    robot.turnRight();
}

function calculatePositionBasedOnDirection(direction, x, y) {
    if (direction === 0) return { x, y: y - 1 }
    else if (direction === 1) return { x: x + 1, y }
    else if (direction === 2) return { x: x, y: y + 1 }
    else if (direction === 3) return { x: x - 1, y }
}

function pointRobotNorth(robot, direction) {
    for (let i = 0; i < direction; i++) {
        robot.turnLeft();
    }
}

function cleaningNavigation(robot, x, y) {
    let directionCovered = 0;
    robot.clean();
    while (directionCovered < 4) {
        if (!visited[`${x}${y}`] && robot.move()) {
            visited[`${x}${y}`] = true;
            let newPosition = calculatePositionBasedOnDirection(directionCovered, x, y);
            pointRobotNorth(robot, directionCovered);
            cleaningNavigation(robot, newPosition.x, newPosition.y);
            goBack(robot);
        }
        robot.turnRight();
        directionCovered++;
    }
}

var visited = {};
function robotRoomCleaner(robot) {
    cleaningNavigation(robot, 0, 0);
}