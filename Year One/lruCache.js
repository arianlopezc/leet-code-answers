/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let loadedValue = this.cache.get(key);
    if (loadedValue === undefined) {
        return -1
    } else {
        this.insertOrRefresh(key,loadedValue);
        return loadedValue;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.size == this.capacity && !this.cache.has(key)){
        let leastRecentKey = this.cache.keys().next().value;
        this.cache.delete(leastRecentKey)
    }
    this.insertOrRefresh(key, value);
};

LRUCache.prototype.insertOrRefresh = function(key, value) {
    this.cache.delete(key);
    this.cache.set(key, value);
}