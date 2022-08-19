class NumMatrix1 {
  constructor(nums) {
    if (nums.length === 0 || nums[0].length) return ;
    let row = nums.length;
    let col = nums[0].length;
    let preSum = new Array(row).fill(new Array(col).fill(0));

    preSum[0][0] = nums[0][0];
    if (row > 0) {
      preSum[1][0] = nums[1][0];
    }
    if (col > 0) {
      preSum[0][1] = nums[0][1];
    }
    for (let i = 1; i < row; i++) {
      for (let j = 1; j < col; j++) {
        const element = nums[i][j];
        preSum[i][j] = preSum[i-1][j] + preSum[i][j-1] + element - preSum[i-1][j-1];
      }
    }
  }
  /* 
  思考
  - 问题
    - 对于只有一行的情况下，就不能赋值给整一行
  */

  sumRegion(row1, col1, row2, col2) {

  }
}

class NumMatrix {
  constructor(nums) {
    if (nums.length === 0 || nums[0].length === 0) return ;
    let row = nums.length;
    let col = nums[0].length;
    let preSum = new Array(row+1).fill(0).map(()=>new Array(col+1).fill(0));

    for (let i = 1; i <= row; i++) {
      for (let j = 1; j <= col; j++) {
        const element = nums[i-1][j-1];
        preSum[i][j] = preSum[i-1][j] + preSum[i][j-1] + element - preSum[i-1][j-1];
      }
    }
    this.preSum = preSum;
  }

  sumRegion(row1, col1, row2, col2) {
    const preSum = this.preSum;
    const result = preSum[row2+1][col2+1] - preSum[row2+1][col1] - preSum[row1][col2+1] + preSum[row1][col1];
    return result;
  }
}

const nums = [
  [1, 2],
]

const matrix = new NumMatrix(nums);
console.log(matrix.sumRegion(0,0, 0,0));