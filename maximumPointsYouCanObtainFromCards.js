/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let size = cardPoints.length;
    let sum =0,maxSum=0;
    let index = 0;
    while (index < k){
        sum += cardPoints[index];
        index++;
    }
    maxSum = sum;
    for(let index = 0; index < k; index++){
        sum += (cardPoints[size-1-index] - cardPoints[k-1-index]);
        maxSum = Math.max(sum, maxSum);
    }
    return maxSum; 
};