/**
 * initialize your data structure here.
 */
var MaxStack = function() {
    this.heapStack = new Heap(true);
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
    this.stack.push(x);
    this.heapStack.insert(x);
    
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
    if (this.stack.length > 0) {
        const toReturn = this.stack.pop();
        this.heapStack.deleteElement(toReturn);
        return toReturn;
    }
    return null;
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
    return this.stack.length > 0 ? this.stack[this.stack.length - 1 ] : null;
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
    return this.heapStack.peek();
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
    if (this.stack.length === 0)
        return null;
    else {
        const maximum = this.heapStack.poll();
        let index = -1;
        for (let i = this.stack.length - 1; i >= 0 && index === -1; i--)
            if (maximum === this.stack[i])
                index = i;
        this.stack.splice(index, 1);
        return maximum;
    }
};


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

const example = new MaxStack();
const actions = ["push","top","push","peekMax","pop","top","push","top","push","pop","peekMax","pop","top","popMax","push","push","top","push","popMax","top","push","pop","push","pop","push","top","top","popMax","top","push","peekMax","peekMax","top","push","push","peekMax","popMax","peekMax","pop","popMax","popMax","popMax","push","peekMax","pop","push","push","top","push","peekMax","push","pop","pop","pop","popMax","push","peekMax","push","push","top","push","pop","popMax","push","push","pop","push","peekMax","peekMax","top","push","push","push","push","pop","top","top","popMax","push","peekMax","push","push","pop","peekMax","push","push","pop","push","top","peekMax","popMax","push","push","push","top","top","pop","push","top","pop","peekMax","push","popMax","top","push","top","push","push","top","push","push","top","pop","push","peekMax","pop","peekMax","top","peekMax","push","push","peekMax","top","push","push","top","popMax","peekMax","top","popMax","push","push","popMax","pop","peekMax","popMax","top","push","top","top","popMax","top","pop","top","pop","push","popMax","peekMax","top","pop","push","push","peekMax","push","pop","push","push","popMax","push","push","top","peekMax","popMax","peekMax","push","peekMax","push","push","peekMax","push","peekMax","top","top","popMax","push","push","pop","push","top","push","peekMax","peekMax","push","peekMax","push","peekMax","popMax","push","push","push","popMax","top","top","push","push","push","popMax","popMax","push","push","peekMax","push","top","push","popMax","peekMax","pop","peekMax","push","push","peekMax","pop","push","push","peekMax","push","peekMax","pop","push","push","top","top","push","top","push","top","push","push","peekMax","push","top","top","popMax","peekMax","push","popMax","top","push","peekMax","pop","push","push","push","popMax","top","peekMax","top","popMax","popMax","peekMax","peekMax","push","push","push","popMax","push","pop","top","popMax","peekMax","peekMax","peekMax","push","top","top","peekMax","peekMax","push","popMax","peekMax","push","pop","push","popMax","push","top","push","popMax","popMax","pop","peekMax","top","top","pop","peekMax","push","pop","popMax","push","pop","push","peekMax","pop","top","pop","peekMax","peekMax","push","popMax","top","top","push","push","popMax","push","popMax","push","push","top","pop","push","popMax","push","push","top","top","top","push","top","push","top","peekMax","push","pop","pop","popMax","push","push","pop","push","push","popMax","pop","pop","top","peekMax","push","push","pop","push","push","peekMax","pop","pop","top","peekMax","pop","push","top","push","peekMax","push","pop","push","top","top","top","push","popMax","push","pop","push","popMax","push","pop","pop","peekMax","top","push","peekMax","top","peekMax","top","push","push","push","top","peekMax","pop","push","pop","popMax","pop","push","popMax","pop","pop","peekMax","push","push","peekMax","popMax","push","peekMax","pop","push","push","peekMax","top","push","push","popMax","push","popMax","push","push","peekMax","peekMax","push","peekMax","pop","push","peekMax","push","peekMax","push","push","push","popMax","pop","push","pop","pop","push","push","top","popMax","pop","popMax","popMax","pop","popMax","peekMax","top","peekMax","popMax","top","top","peekMax","push","push","popMax","push","top","top","top","top","push","push","top","push","push","peekMax","push","push","push","popMax","push","pop","push","push","peekMax","top","push","top","pop","top","push","popMax","push","top","popMax","peekMax","push","push","peekMax","popMax","popMax","push","pop","top","top","pop","top","push","popMax","top","peekMax","push","push","top","push","pop","push","peekMax","peekMax","peekMax","push","pop","top","pop","push","popMax","push","pop","top","push","push","pop","peekMax","peekMax","pop","push","push","push","pop","popMax","pop","peekMax","push","popMax","peekMax","top","peekMax","push","pop","pop","pop","push","peekMax","pop","top","popMax","push","popMax","popMax","top","push","peekMax","popMax","peekMax","push","push","push","pop","push","push","peekMax","push","top","pop","push","pop","pop","pop","top","push","top","peekMax","popMax","pop","top","push","push","peekMax","popMax","popMax","push","pop","push","pop","push","push","push","top","peekMax","popMax","peekMax","push","push","push","pop","push","push","top","push","peekMax","popMax","top","push","push","push","push","top","push","pop","top","pop","push","top","top","top","top","push","peekMax","push","popMax","popMax","top","push","peekMax","popMax","popMax","push","push","popMax","pop","push","push","top","popMax","popMax","push","popMax","push","popMax","peekMax","popMax","popMax","push","peekMax","push","push","top","top","popMax","push","push","top","push","peekMax","push","popMax","push","top","top","pop","popMax","top","top","push","pop","popMax","peekMax","popMax","popMax","peekMax","top","push","push","push","popMax","peekMax","popMax","push","pop","pop","pop","push","push","push","pop","popMax","push","push","push","pop","push","popMax","popMax","top","top","pop","popMax","pop","push","peekMax","push","push","popMax","popMax","peekMax","popMax","push","push","top","pop","pop","top","pop","top","pop","top","push","push","pop","push","top","push","push","top","top","pop","push","top","top","top","push","top","popMax","push","peekMax","push","pop","popMax","peekMax","top","peekMax","popMax","top","push","popMax","push","push","peekMax","popMax","popMax","push","peekMax","peekMax","peekMax","push","push","top","push","push","push","push","peekMax","popMax","peekMax","pop","push","push","top","peekMax","push","popMax","peekMax"];
const values = [[-9],[],[81],[],[],[],[-91],[],[22],[],[],[],[],[],[-66],[89],[],[97],[],[],[5],[],[24],[],[21],[],[],[],[],[-12],[],[],[],[-47],[-46],[],[],[],[],[],[],[],[47],[],[],[82],[-36],[],[-29],[],[73],[],[],[],[],[-2],[],[5],[72],[],[-6],[],[],[-78],[-6],[],[-22],[],[],[],[-85],[89],[-11],[-5],[],[],[],[],[-93],[],[9],[-91],[],[],[-89],[43],[],[9],[],[],[],[-86],[-41],[-86],[],[],[],[-9],[],[],[],[-61],[],[],[23],[],[-84],[-89],[],[42],[-31],[],[],[18],[],[],[],[],[],[-34],[71],[],[],[52],[-74],[],[],[],[],[],[99],[18],[],[],[],[],[],[-20],[],[],[],[],[],[],[],[-23],[],[],[],[],[82],[8],[],[-74],[],[81],[90],[],[13],[-74],[],[],[],[],[-30],[],[69],[17],[],[-39],[],[],[],[],[-6],[-56],[],[74],[],[61],[],[],[48],[],[41],[],[],[13],[-88],[87],[],[],[],[-1],[-34],[72],[],[],[40],[-37],[],[59],[],[60],[],[],[],[],[73],[-42],[],[],[-29],[99],[],[-62],[],[],[55],[91],[],[],[94],[],[-3],[],[97],[40],[],[-25],[],[],[],[],[88],[],[],[-17],[],[],[74],[-65],[79],[],[],[],[],[],[],[],[],[85],[42],[49],[],[25],[],[],[],[],[],[],[-76],[],[],[],[],[35],[],[],[-8],[],[80],[],[79],[],[29],[],[],[],[],[],[],[],[],[46],[],[],[81],[],[41],[],[],[],[],[],[],[14],[],[],[],[-54],[-3],[],[-33],[],[-14],[15],[],[],[-38],[],[-52],[58],[],[],[],[18],[],[41],[],[],[-62],[],[],[],[-35],[-16],[],[70],[-79],[],[],[],[],[],[-48],[-48],[],[62],[-11],[],[],[],[],[],[],[-60],[],[-43],[],[-98],[],[100],[],[],[],[99],[],[77],[],[10],[],[-58],[],[],[],[],[-81],[],[],[],[],[83],[80],[-85],[],[],[],[-82],[],[],[],[7],[],[],[],[],[-85],[28],[],[],[-96],[],[],[58],[16],[],[],[-61],[-70],[],[-8],[],[-84],[89],[],[],[85],[],[],[-39],[],[-100],[],[21],[58],[12],[],[],[-10],[],[],[-69],[52],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[-82],[32],[],[78],[],[],[],[],[-15],[-11],[],[-61],[-38],[],[-84],[-44],[-45],[],[-12],[],[-97],[-54],[],[],[-79],[],[],[],[26],[],[-2],[],[],[],[-47],[-59],[],[],[],[-53],[],[],[],[],[],[29],[],[],[],[57],[-80],[],[-97],[],[-32],[],[],[],[-63],[],[],[],[43],[],[50],[],[],[60],[79],[],[],[],[],[-82],[94],[-10],[],[],[],[],[-48],[],[],[],[],[96],[],[],[],[-44],[],[],[],[],[-45],[],[],[],[47],[],[],[],[79],[74],[-44],[],[-60],[-83],[],[-4],[],[],[-25],[],[],[],[],[-98],[],[],[],[],[],[80],[-43],[],[],[],[66],[],[75],[],[10],[63],[67],[],[],[],[],[61],[5],[55],[],[68],[-35],[],[-93],[],[],[],[41],[-99],[-1],[-100],[],[-26],[],[],[],[-73],[],[],[],[],[81],[],[-22],[],[],[],[-62],[],[],[],[-30],[-84],[],[],[-24],[-9],[],[],[],[67],[],[-89],[],[],[],[],[-28],[],[-71],[-53],[],[],[],[32],[-44],[],[-29],[],[91],[],[-1],[],[],[],[],[],[],[-88],[],[],[],[],[],[],[],[-81],[-91],[-1],[],[],[],[-14],[],[],[],[-98],[-89],[-25],[],[],[98],[-24],[61],[],[0],[],[],[],[],[],[],[],[60],[],[-62],[-20],[],[],[],[],[59],[76],[],[],[],[],[],[],[],[],[-100],[-39],[],[59],[],[92],[1],[],[],[],[30],[],[],[],[-50],[],[],[-38],[],[-71],[],[],[],[],[],[],[],[-58],[],[9],[33],[],[],[],[27],[],[],[],[-17],[43],[],[92],[-25],[-61],[83],[],[],[],[],[-84],[36],[],[],[-69],[],[]];
for (let index = 0; index < actions.length; index++) {
    const value = values[index].length > 0 ?  values[index][0] : null;
    if (index === 679)
        console.log(`index push ${index}`);
    switch(actions[index]) {
        case 'push':
            example.push(value);
            break;
        case 'pop':
            console.log(`index ${index} -> ${example.pop()}`);
            break;
        case 'top':
            console.log(`index ${index} -> ${example.top()}`);
            break;
        case 'peekMax':
            if (example.peekMax() === -15)
                console.log(`index ${index}`);
            break;
        case 'popMax':
            if (example.popMax() === -15)
                console.log(`index ${index}`);
            break;
    }
}