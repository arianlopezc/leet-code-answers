/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const totalRepeatedValues = new Map();
    for (const number of nums) {
        const value = totalRepeatedValues.get(number);
        if (!value) {
            totalRepeatedValues.set(number, 1);
        } else {
            totalRepeatedValues.set(number, value + 1);
        }
    }
    const heap = [];
    for (const item of totalRepeatedValues) {
        addToHeap(heap, item);
    }
    const result = [];
    while (k > 0) {
        result.push(getTop(heap)[0]);
        k--;
    }
};

/**
 * @param {number[]} heap
 * @param {[any, any]} value
 */
function addToHeap(heap, value) {
    heap.push(value);
    let indexChild = heap.length - 1;
    if (indexChild > 0) {
        const index = Math.floor((indexChild - 1) / 2);
        while (Math.floor((indexChild - 1) / 2) >= 0 && heap[Math.floor((indexChild - 1) / 2)][1] < heap[indexChild][1]) {
            const parentIndex = Math.floor((indexChild - 1) / 2);
            const temp = heap[parentIndex];
            heap[parentIndex] = heap[indexChild];
            heap[indexChild] = temp;
            indexChild = parentIndex;
        } 
    }
}

/**
 * @param {any[]} heap
 */
function getTop(heap) {
    const topValue = heap.shift();
    heap.unshift(heap.pop());
    let indexPivot = 0;
    while (
        (2 * indexPivot) + 1 < heap.length
        && (heap[indexPivot][1] < heap[(2 * indexPivot) + 1][1]
        || heap[indexPivot][1] < heap[(2 * indexPivot) + 2][1])
    ) {
        if (heap[indexPivot][1] < heap[(2 * indexPivot) + 1][1] && (2 * indexPivot) + 2 < heap.length && heap[indexPivot][1] < heap[(2 * indexPivot) + 2][1]) {
            if (heap[(2 * indexPivot) + 2][1] < heap[(2 * indexPivot) + 1][1]) {
                const temp = heap[indexPivot];
                heap[indexPivot] = heap[(2 * indexPivot) + 1];
                heap[(2 * indexPivot) + 1] = temp;
                indexPivot = (2 * indexPivot) + 1;
            } else {
                const temp = heap[indexPivot];
                heap[indexPivot] = heap[(2 * indexPivot) + 2];
                heap[(2 * indexPivot) + 2] = temp;
                indexPivot = (2 * indexPivot) + 2;
            }
        } else if (heap[indexPivot][1] < heap[(2 * indexPivot) + 1][1]) {
            const temp = heap[indexPivot];
            heap[indexPivot] = heap[(2 * indexPivot) + 1];
            heap[(2 * indexPivot) + 1] = temp;
            indexPivot = (2 * indexPivot) + 1;
        } else {
            const temp = heap[indexPivot];
            heap[indexPivot] = heap[(2 * indexPivot) + 2];
            heap[(2 * indexPivot) + 2] = temp;
            indexPivot = (2 * indexPivot) + 2;
        }
    }
    return topValue;
}