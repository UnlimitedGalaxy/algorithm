function lengthOfLIS(nums) {
  // 定义base case
  const dp = new Array(nums.length).fill(1);

  // 递推dp
  for (let i=0; i< nums.length; i++) {
    for(let j = 0; j < i; j ++) {
      if(nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  let res = Math.max(...dp);
  return res;
}
const arr = [1, 4, 5, 3, 2];
// lengthOfLIS(arr);

function lengthOfLIS2(nums) {
  const top = new Array(nums.length); // 用来访堆顶的牌的
  // 牌堆数初始化为 0
  let piles = 0;
  for (let i = 0; i < nums.length; i++) {
      // 要处理的扑克牌
      let poker = nums[i];

      /***** 搜索左侧边界的二分查找 *****/
      let left = 0, right = piles;
      while (left < right) { // 什么时候不成立 left === right 的时候
          let mid = Math.floor((left + right) / 2);
          if (top[mid] > poker) {
              right = mid;
          } else if (top[mid] < poker) {
              left = mid + 1;
          } else {
              right = mid;
          }
      }
      /*********************************/
      
      // 没找到合适的牌堆，新建一堆
      if (left == piles) piles++;
      // 把这张牌放到牌堆顶
      top[left] = poker;
  }
  // 牌堆数就是 LIS 长度
  return piles;
}

lengthOfLIS2(arr);

/* 
0705
- 没有错，它返回的是增长 子序列，而不是增长的连续子序列
*/
function getSequence(arr) {
  const p = arr.slice() // 它也是保存了索引
  const result = [0] // 保存的是索引
  let i, j, u, v, c
  const len = arr.length
  for (i = 0; i < len; i++) {
    const arrI = arr[i]
    if (arrI !== 0) {
      j = result[result.length - 1]
      if (arr[j] < arrI) {
        p[i] = j
        result.push(i)
        continue
      }
      u = 0
      v = result.length - 1
      while (u < v) {
        c = (u + v) >> 1 // 这里是直接整除2 并且 会去掉小数，相当于使用了 math.floor()
        if (arr[result[c]] < arrI) {
          u = c + 1
        } else {
          v = c
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1]
        }
        result[u] = i
      }
    }
  }
  u = result.length
  v = result[u - 1]
  while (u-- > 0) {
    result[u] = v
    v = p[v]
  }
  return result // 返回增长子序列的索引
}

const arr2 = [1, 3, 2, 4];
const res = getSequence(arr2);
console.log(res);