function Heap(maxHeap = false) {
    this.heap = [];
    this.maxHeap = maxHeap;
}

Heap.prototype.insert = function(newItem) {
    this.heap.push(newItem);
    this.heapUp();
}

Heap.prototype.peek = function() {
    return this.heap.length > 0 ? this.heap[0] : undefined;
}

Heap.prototype.poll = function() {
    const polled = this.heap.length > 0 ? this.heap.shift() : undefined;
    if ((polled || polled === 0) && this.heap.length > 0)
        this.headDown();
    return polled;
}

Heap.prototype.heapUp = function() {
    let index = this.heap.length - 1;
    let swipped;
    do {
        const parentIndex = Math.floor((index - 1) / 2);
        swipped = false;
        if (
            (!this.maxHeap && this.heap[parentIndex] > this.heap[index])
            || (this.maxHeap && this.heap[parentIndex] < this.heap[index])
        ) {
            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = this.heap[index];
            this.heap[index] = temp;
            swipped = true;
        }
        index = parentIndex;
    } while (swipped);
}

Heap.prototype.headDown = function(indexToHeapify = 0) {
    let index = indexToHeapify;
    if (index === 0)
        this.heap.unshift(this.heap.pop());
    else if (index === this.heap.length - 1)
        this.heap.pop();
    else
        this.heap[index] = this.heap.pop();
    let swapped;
    do {
        swapped = false;
        const leftChild = (2 * index) + 1;
        const rightChild = (2 * index) + 2;
            if (
                !this.maxHeap && (this.heap[index] > this.heap[leftChild] || this.heap[index] > this.heap[rightChild])
            ) {
                swapped = true;
                if ((leftChild < this.heap.length && rightChild >= this.heap.length) || this.heap[leftChild] >= this.heap[rightChild]) {
                    const temp = this.heap[index];
                    this.heap[index] = this.heap[rightChild];
                    this.heap[rightChild] = temp;
                    index = rightChild;
                } else if ((rightChild < this.heap.length && leftChild >= this.heap.length) || this.heap[leftChild] < this.heap[rightChild]) {
                    const temp = this.heap[index];
                    this.heap[index] = this.heap[leftChild];
                    this.heap[leftChild] = temp;
                    index = leftChild;
                }
            } else if (
                this.maxHeap && (this.heap[index] < this.heap[leftChild] || this.heap[index] < this.heap[rightChild])
            ) {
                swapped = true;
                if ((leftChild < this.heap.length && rightChild >= this.heap.length) || this.heap[leftChild] >= this.heap[rightChild]) {
                    const temp = this.heap[index];
                    this.heap[index] = this.heap[leftChild];
                    this.heap[leftChild] = temp;
                    index = leftChild;
                } else if ((rightChild < this.heap.length && leftChild >= this.heap.length)  || this.heap[leftChild] < this.heap[rightChild]) {
                    const temp = this.heap[index];
                    this.heap[index] = this.heap[rightChild];
                    this.heap[rightChild] = temp;
                    index = rightChild;
                }
            }
    } while (swapped);
}

Heap.prototype.deleteElement = function(element) {
    const index = this.heap.findIndex((item) => item === element);
    if (index === -1)
        return null;
    else {
        if (this.heap.length === 1) {
            return this.heap.pop();
        } else {
            const returnItem = index === 0 ? this.heap.shift() :  this.heap[index];
            this.headDown(index);
            return returnItem;
        }
    }
}

const heap = new Heap(true);
for (let number of [3,2,1,5,6,4]) {
    heap.insert(number);
}
heap.deleteElement(1);
for (let index = 0; index < 7 - 1; index++) {
    console.log(heap.poll());
}