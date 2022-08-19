/**
 * @param {number[]} nums
 * 思考
 * - 初始化的时候先将前缀的数字计算好
 */
var NumArray = function(nums) {
  this.preNums = new Array(nums.length + 1);
  this.preNums[0] = 0;
  for(let i = 0; i < nums.length; i++) {
    this.preNums[i + 1] = nums[i] + this.preNums[i];
  }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  // debugger;
  return this.preNums[right + 1] - this.preNums[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

const testArr = new NumArray([1, 2, 3, 4]);

testArr.sumRange(1, 2);