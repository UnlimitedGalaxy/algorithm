/* 
找零问题
公式：
f[0] = 0 (n=0)
f[n] = min(f[n-cᵢ]) + 1 (n>0)
*/

const coinChange = (coins, amount) => {
  // 初始化备忘录,用Infinity填满备忘录，Infinity说明该值不可以用硬币凑出来
  const dp = new Array(amount + 1).fill(Infinity)

  // 设置初始条件为 0
  dp[0] = 0

  for (var i = 1; i <= amount; i++) {
    for (const coin of coins) {
      // 根据动态转移方程求出最小值
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
        /* 
          思考：它其实是要多次比较来得出最小值
        */
      }
    }
  }

  // 如果 `dp[amount] === Infinity`说明没有最优解返回-1,否则返回最优解
  return dp[amount] === Infinity ? -1 : dp[amount]
}

console.log(coinChange([3, 6], 6));
