let Node = function(value, position) {
    this.value = value;
    this.position = position;
    this.smaller = undefined;
    this.bigger = undefined;
}

let Tree = function(size) {
    this.root = undefined; 
    this.result = new Array(size).fill(0);
}

Tree.prototype.insert = function(value, position) {
    let navigation = this.root;
    if (!navigation) {
        this.root = new Node(value, position);
    } else {
        this.insertTraverse(navigation, value, position);
    }
}

Tree.prototype.insertTraverse = function(node, value, position) {
    if (node.value > value) {
        if (!node.smaller) {
            let smaller = new Node(value, position);
            node.smaller = smaller;
        } else {
            this.insertTraverse(node.smaller, value, position);
        }
        this.result[node.position]++;
        if (node.bigger) this.increaseBiggers(node.bigger);
    } else if (node.value < value) {
        if (!node.bigger) {
            let bigger  = new Node(value, position);
            node.bigger = bigger;
        } else {
            this.insertTraverse(node.bigger, value, position);
        }
    }
}

Tree.prototype.increaseBiggers = function (node) {
    this.result[node.position]++;
    if (node.bigger) this.increaseBiggers(node.bigger);
    if (node.smaller) this.increaseBiggers(node.smaller);
}

var countSmaller = function(nums) {
    let tree = new Tree(nums.length);
    for (const idx in nums) {
        tree.insert(nums[idx], idx);
    }
    return tree.result;
};

console.log(countSmaller([5,2,6,1]));
console.log(countSmaller([0,2,1]));
console.log(countSmaller([26,78,27,100,33,67,90]));