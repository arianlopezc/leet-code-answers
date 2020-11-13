/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    if (nums1.length === 0 || nums2.length === 0)
        return [];
    else {
        let toCheck = nums1.length >= nums2.length ? nums1 : nums2;
        let toSpread = nums2.length <= nums1.length ? nums2 : nums1;
        const map = new Map();
        for (let number of toSpread) {
            map.set(number, true);
        }
        const intersec = new Map();
        for (let number of toCheck) {
            if (map.has(number))
            intersec.set(number, number);
        }
        return Array.from(intersec.values());
    }
};