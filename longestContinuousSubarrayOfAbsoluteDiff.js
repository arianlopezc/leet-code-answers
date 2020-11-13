/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
// var longestSubarray = function(nums, limit) {
//     if (nums.length === 0) {
//         return 0;
//     }
//     let smallestValueIndex = 0;
//     let smallestValue = nums[0];
//     let navIndex = 0;
//     let currentArrayLength = 0;
//     let totalLongestArray = 0;
//     while (navIndex < nums.length) {
//         const diff = nums[navIndex] - smallestValue;
//         if (Math.abs(diff) <= limit) {
//             currentArrayLength++;
//         } else {
//             if (diff < 0) {
//                 smallestValueIndex = navIndex;
//                 smallestValue = nums[navIndex];
//                 totalLongestArray = Math.max(currentArrayLength, totalLongestArray);
//                 currentArrayLength = 1;
//             } else {
//                 let newSubArray;
//                 do {
//                     newSubArray = nums.slice(smallestValueIndex + 1, navIndex);
//                     currentArrayLength = newSubArray.length;
//                     smallestValue = Math.min(...newSubArray);
//                     const smallestValueIndexInSubArray = newSubArray.findIndex((number) => number === smallestValue);
//                     if (smallestValueIndexInSubArray === -1) {
//                         smallestValueIndex = navIndex;
//                         smallestValue = nums[navIndex];
//                     } else {
//                         smallestValueIndex = (navIndex - newSubArray.length) + smallestValueIndexInSubArray;
//                     }
//                 } while (Math.abs(smallestValue - nums[navIndex]) > limit)
//                 currentArrayLength = newSubArray.length + 1;
//             }
//         }
//         totalLongestArray = Math.max(currentArrayLength, totalLongestArray);
//         navIndex++;
//     }
//     return totalLongestArray;
// };

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    if (nums.length === 0) {
        return 0;
    }
    let smallestValueIndex = 0;
    let smallestValue = nums[0];
    let largestValueIndex = 0;
    let largestValue = nums[0];
    let navIndex = 0;
    let currentArrayLength = 0;
    let totalLongestArray = 0;
    while (navIndex < nums.length) {
        const diffSmallest = nums[navIndex] - smallestValue;
        const diffLargest = nums[navIndex] - largestValue;
        if (Math.abs(diffSmallest) <= limit && Math.abs(diffLargest) <= limit) {
            currentArrayLength++;
            if (nums[navIndex] < smallestValue) {
                smallestValue = nums[navIndex];
                smallestValueIndex = navIndex;
            }
            if (nums[navIndex] >= largestValue) {
                largestValue = nums[navIndex];
                largestValueIndex = navIndex;
            }
        } else {
            if (Math.abs(diffLargest) > limit) {
                smallestValueIndex = navIndex;
                smallestValue = nums[navIndex];
                largestValueIndex = navIndex;
                largestValue = nums[navIndex];
                currentArrayLength = 1;
            } else if (Math.abs(diffSmallest) > limit) {
                let newSubArray;
                do {
                    newSubArray = nums.slice(smallestValueIndex + 1, navIndex);
                    currentArrayLength = newSubArray.length;
                    smallestValue = Math.min(...newSubArray);
                    const smallestValueIndexInSubArray = newSubArray.findIndex((number) => number === smallestValue);
                    if (smallestValueIndexInSubArray === -1) {
                        smallestValueIndex = navIndex;
                        smallestValue = nums[navIndex];
                    } else {
                        smallestValueIndex = (navIndex - newSubArray.length) + smallestValueIndexInSubArray;
                    }
                } while (Math.abs(smallestValue - nums[navIndex]) > limit)
                currentArrayLength = newSubArray.length + 1;
            }
        }
        totalLongestArray = Math.max(currentArrayLength, totalLongestArray);
        navIndex++;
    }
    return totalLongestArray;
};

longestSubarray([1,5,6,7,8,10,6,5,6], 3);