/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const visitedRooms = {};
    const totalVisited = visitRoom(0, visitedRooms, rooms);
    if (totalVisited === rooms.length) return true;
    return false;
};

function visitRoom (roomNumber, visitedRooms, rooms) {
    visitedRooms[roomNumber] = true;
    let visitedTotal = 1;
    let keys = rooms[roomNumber];
    for (const key of keys) {
        if (!visitedRooms[key]) {
            visitedTotal += visitRoom(key, visitedRooms, rooms);
        }
    }
    return visitedTotal;
}