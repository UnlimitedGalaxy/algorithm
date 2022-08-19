// 将二维矩阵原地顺时针旋转 90 度
function rotate(matrix) {
  let n = matrix.length;
  // 先沿对角线镜像对称二维矩阵
  for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
          // swap(matrix[i][j], matrix[j][i]);
          let temp = matrix[i][j];
          matrix[i][j] = matrix[j][i];
          matrix[j][i] = temp;
      }
  }
  // 然后反转二维矩阵的每一行
  for (let row of matrix) {
      reverse(row);
  }
}

// 反转一维数组
function reverse(arr) {
  let i = 0, j = arr.length - 1;
  while (j > i) {
      // swap(arr[i], arr[j]);
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
  }
}