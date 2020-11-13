/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let dp = [...Array(text2.length + 1)].map(row => Array(text1.length + 1).fill(0));
    let answer = 0;
    for(let i = 1; i <= text2.length; i++) {
        for(let j = 1; j <= text1.length; j++) {
            if(text2[i - 1] === text1[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
                answer = Math.max(answer, dp[i][j]);
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
                answer = Math.max(answer, dp[i][j]);
            }
        }
    }
    return answer;
};