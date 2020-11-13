const new21Game = (N, K, W) => {
    if (K === 0 || N >= K + W) return 1;
  
    let sum = 1;
    let ans = 0;
    const dp = [];
    dp[0] = 1;
  
    for (let i = 1; i <= N; i++) {
      dp[i] = sum / W;
  
      if (i < K) {
        sum = sum + dp[i];
      } else {
        ans = ans + dp[i];
      }
  
      if (i - W >= 0) {
        sum = sum - dp[i - W];
      }
    }
  
    return ans;
  };

  console.log(new21Game(21,17,10));