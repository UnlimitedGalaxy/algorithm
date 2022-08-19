class Difference {
  
  /* 输入一个初始数组，区间操作将在这个数组上进行 */
  constructor(nums) {
      // assert nums.length > 0;
      this.diff = new Array(nums.length);
      // 根据初始数组构造差分数组
      this.diff[0] = nums[0];
      for (let i = 1; i < nums.length; i++) {
          this.diff[i] = nums[i] - nums[i - 1];
      }
  }

  /* 给闭区间 [i, j] 增加 val（可以是负数）*/
  increment(i, j, val) {
      this.diff[i] += val;
      if (j + 1 < this.diff.length) {
          this.diff[j + 1] -= val;
      }
  }

  /* 返回结果数组 */
  result() {
      const diff = this.diff;
      let res = new Array(diff.length);
      // 根据差分数组构造结果数组
      res[0] = diff[0];
      for (let i = 1; i < diff.length; i++) {
          res[i] = res[i - 1] + diff[i];
      }
      return res;
  }
}

function corpFlightBookings(bookings, n) {
  // nums 初始化为全 0
  let nums = new Array(n).fill(0);
  // 构造差分解法
  const df = new Difference(nums);

  for (let booking of bookings) {
      // 注意转成数组索引要减一哦
      let i = booking[0] - 1;
      let j = booking[1] - 1;
      let val = booking[2];
      // 对区间 nums[i..j] 增加 val
      df.increment(i, j, val);
  }
  // 返回最终的结果数组
  return df.result();
}