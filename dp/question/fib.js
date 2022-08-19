const map = {}

function fib1(num) {
  if(num === 1 || num === 2) return 1;
  if(!map[num]) {
    const res = fib1(num - 1) + fib1(num - 2);
    map[num] = res;
  }
  return map[num];
}

// fib1(6);

function fib2(num) {
  const memo = new Array(num + 1).fill(0); // 为什么是+1 是因为最后一位是用来装num的值
  const result = helper(memo, num);
  return result;
}

function helper(memo, num) {
  if(num === 1 || num === 0) return num;

  if(memo[num] !=0) return memo[num];
  memo[num] = helper(memo, num - 1) + helper(memo, num - 2);
  return memo[num];
}

// fib2(6);

/* 
思考：
- 这样每次都要 进行新建Array，反而更加地麻烦
- 还不如，在函数外建一个map 来做缓存；
*/
function fib3(n) {
  if (n === 0) return 0;
  const dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i < dp.length; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }
  return dp[n];
}

// console.log(fib3(6)); // 8

/* 
细心的读者会发现，根据斐波那契数列的状态转移方程，当前状态只和之前的两个状态有关，其实并不需要那么长的一个 DP table 来存储所有的状态，只要想办法存储之前的两个状态就行了。

所以，可以进一步优化，把空间复杂度降为 O(1)。这也就是我们最常见的计算斐波那契数的算法：

问题：
- 我要计算到targetN 是需要循环多少次
- 要得到targetN 就需要先得到 N - 1、N - 2;
- 
*/
function fib4(n) {
  if (n === 0 || n ===1) return n;
  let dp_i_1 = 1;
  let dp_i_2 = 0;

  for (let i = 2; i <= n; i++) {
    let dp_i = dp_i_1 + dp_i_2;
    // 需要更新 上面的两个值
    dp_i_2 = dp_i_1; // 下一轮的值 dp_i_2 需要找的上一轮的dp_i_1
    dp_i_1 = dp_i; // 下一轮的值 dp_i_1 需要找的上一轮的dp_i
  }
  return dp_i_1;
}
console.log(fib4(6));