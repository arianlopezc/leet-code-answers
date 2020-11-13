/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function(arr, target) {
    if (arr.length === 0) {
        return -1;
    }
    const foundArrays = [];
    let index = 0;
    let currentSubarray = [];
    let currentTotal = 0;
    let shared = false;
    while (index < arr.length) {
        if (arr[index] === target) {
            foundArrays.push([target]);
            currentTotal = 0;
            currentSubarray = [];
        } else {
            if (currentTotal + arr[index] === target) {
                if (shared) {
                    if (foundArrays[foundArrays.length - 1].length > currentSubarray.length) {
                        foundArrays.pop();
                        currentSubarray.push(arr[index]);
                        foundArrays.push(currentSubarray);
                        currentSubarray = [];
                        currentTotal = 0;
                        index--;
                        shared = true;
                    }
                } else {
                    currentSubarray.push(arr[index]);
                    foundArrays.push(currentSubarray);
                    currentSubarray = [];
                    currentTotal = 0;
                    index--;
                    shared = true;
                }
            } else {
                if (currentTotal + arr[index] < target) {
                    currentTotal += arr[index];
                    currentSubarray.push(arr[index]);
                } else {
                    if (arr[index] > target) {
                        currentSubarray = [];
                        currentTotal = 0;
                    } else {
                        shared = false;
                        while (currentTotal + arr[index] > target && currentSubarray.length > 0) {
                            currentTotal -= currentSubarray.shift();
                        }
                        index--;
                    }
                }
            }
        }
        index++;
    }
    if (foundArrays.length < 2) {
        return -1;
    }
    foundArrays.sort((a, b) => a.length - b.length);
    return foundArrays[0].length + foundArrays[1].length;
};

minSumOfLengths([2,2,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 20);