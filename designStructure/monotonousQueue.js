const DoubleLink = require('../LinkedList/DoubleLink').DoubleLink;

class MonotonousQueue {
  constructor() {
    this.maxq = new DoubleLink();
  }
  push(n) {
    // 将小于 n 的元素全部删除
    while (!this.maxq.isEmpty() && this.maxq.getLastValue() < n) {
        this.maxq.removeLast();
    }
    // 然后将 n 加入尾部
    this.maxq.addLastValue(n);
}

  max() {
      return this.maxq.getFirstValue();
  }

  pop(n) {
    if (n == this.maxq.getFirstValue()) {
        this.maxq.removeFirst();
    }
  }
}

function maxSlidingWindow(nums, k) {
  const window = new MonotonousQueue();
  const res = [];
  
  for (let i = 0; i < nums.length; i++) {
      if (i < k - 1) {
          //先填满窗口的前 k - 1
          window.push(nums[i]); // 虽然有可能存在删除节点的情况，但是确实是完成前面k-1 个节点的添加
      } else {
          // 窗口向前滑动，加入新数字
          window.push(nums[i]);
          // 记录当前窗口的最大值
          res.push(window.max());
          // 移出旧数字，给新节点，腾出位置
          window.pop(nums[i - k + 1]);
      }
  }
  
  return res;
}

// maxSlidingWindow([1], 1);
maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3);