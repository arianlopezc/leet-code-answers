/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
    const map = new Map();
    const totalLength = Math.max(arr1.length, arr2.length, arr3.length);
    for (let index = 0; index < totalLength; index++) {
        setToMap(map, arr1[index]);
        setToMap(map, arr2[index]);
        setToMap(map, arr3[index]);
    }
    return Array.from(map).filter((item) => item[1] >= 3).map((item) => item[0]);
};

function setToMap(map, value) {
    if (map.has(value)) {
        map.set(value, map.get(value) + 1);
    } else {
        map.set(value, 1);
    }
}