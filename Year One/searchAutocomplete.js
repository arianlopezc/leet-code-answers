var TrieNode = function(letter, repeated) {
    this.letter = letter ? letter : '';
    this.repeated = repeated ? repeated : undefined;
    this.children = [];
}

/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
var AutocompleteSystem = function(sentences, times) {
    this.map = {};
    this.currentSentence = "";
    this.navigate;
    this.init(sentences, times);
};

AutocompleteSystem.prototype.init = function(sentences, times) {
    for (let sentenceIndex in sentences) {
        let repeated = times[sentenceIndex];
        let sentence = sentences[sentenceIndex];
        if (!this.map[sentence[0]]) {
            this.map[sentence[0]] = new TrieNode(sentence[0]);
        }
        let parent = this.map[sentence[0]];
        for (let index = 1; index < sentence.length; index++) {
            let child = parent.children.find(item => item.letter === sentence[index]);
            if (!child) {
                child = new TrieNode(sentence[index]);
                parent.children.push(child);
            }
            parent = child;
        }
        parent.repeated = repeated;
    }
}

/** 
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function(c) {
    if (c === "#") {
        this.navigate.repeated = this.navigate.repeated ? this.navigate.repeated + 1 : 1;
        this.navigate = undefined;
        this.currentSentence = "";
        return [];
    }
    if (!this.navigate) {
        if (!this.map[c]) {
            this.map[c] = new TrieNode(c);
        }
        this.navigate = { children: [this.map[c]] };
    }
    this.currentSentence += c;
    let child = this.navigate.children.find(item => item.letter === c);
    let suggestions = [];
    if (!child) {
        child = new TrieNode(c);
        this.navigate.children.push(child);
    } else {
        this.getTopThree(child, suggestions, this.currentSentence);
    }
    this.navigate = child;
    suggestions.sort((a, b) => a.repeated > b.repeated ? -1 : a.repeated < b.repeated ? 1 : a.word < b.word ? -1 : a.word > b.word ? 1 : 0);
    return suggestions.slice(0, 3).map(item => item.word);
};

AutocompleteSystem.prototype.getTopThree = function(node, suggestions, word) {
    if (node.children.length > 0) {
        let nodes = Object.values(node.children);
        for (let index = 0; index < nodes.length; index++) {
            let nav = nodes[index];
            this.getTopThree(nav, suggestions, word + nav.letter);
        }
    } else {
        if (node.repeated) {
            suggestions.push({word, repeated: node.repeated});
        }
    }
    return;
}