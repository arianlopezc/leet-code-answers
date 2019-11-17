/**
 * Initialize your data structure here.
 */
var TimeMap = function() {
    this.map = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.map[key]) {
        this.map[key] = {};
    }
    this.map[key][timestamp] = value;
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.map[key]) return "";
    let keyValue = this.map[key];
    for (let stamp = timestamp; stamp >= 0; stamp--) {
        if (keyValue[stamp]) return keyValue[stamp];
    }
    return "";
};