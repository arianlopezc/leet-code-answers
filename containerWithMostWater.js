/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxarea = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        maxarea = Math.max(maxarea, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxarea;
};