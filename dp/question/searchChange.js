function coinChange(coins, amount) {
  return dp(coins, amount);
}

function dp(coins, amount) {
  if (amount < 0) return -1;
  if (amount === 0) return 0;

  let res = Number.POSITIVE_INFINITY;
  for (let coin of coins) {
    let subProblem = dp(coins, amount - coin);
    if (subProblem === -1) continue;
    res = Math.min(res, subProblem + 1);
  }

  return res === Number.POSITIVE_INFINITY ? -1 : res;
}
const coins = [1, 2, 5];
// const res = coinChange(coins, 6);
// console.log(res);

let memo = [];
function coinChange2(coins, amount) {
  memo = new Array(amount + 1).fill(-666);
  return dp2(coins, amount);
}

function dp2(coins, amount) {
  if (amount < 0) return -1;
  if (amount === 0) return 0;

  if(memo[amount] !== -666) return memo[amount];

  let res = Number.POSITIVE_INFINITY;
  for (let coin of coins) {
    let subProblem = dp2(coins, amount - coin);
    if (subProblem === -1) continue;
    res = Math.min(res, subProblem + 1);
  }

  res = res === Number.POSITIVE_INFINITY ? -1 : res;
  memo[amount] = res;
  return res;
}

function coinChange3(coins, amount) {
  // 为什么需要加1 是因为取值的时候，是取到dp[amount]的
  // 需要填写一个不可能的值
  const dp = new Array(amount + 1).fill(amount + 1); 
  dp[0] = 0;

  for(let i = 0; i < dp.length; i++) {
    for (let coin of coins) {
      if (i - coin < 0) continue;
      dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }

  return dp[amount] === amount + 1 ? -1 : dp[amount];
}
