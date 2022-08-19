/* 
  归并排序
  思考：
  - 是用递归的
  - 把大问题拆分为小问题
 */

const testData = [8, 10, 9, 3, 5]


function mergeSort(arr) {
  // 检测输入是否正常
  if (!Array.isArray(arr)) {
    return []
  }
  if (arr.length <= 1) { // undefined <= 1 => false
    return arr
  }

  const middle = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, middle) // 有可能是空数组 因为存在（0，0）的情况
  const leftOrderArr = mergeSort(leftArr)
  const rightArr = arr.slice(middle) // 至少里面会有一个有用的值
  const rightOrderArr = mergeSort(rightArr)

  const mergedArr = mergeArr(leftOrderArr, rightOrderArr)
  return mergedArr
}

function mergeArr(leftArr, rightArr) {
  const arr = []
  
  while(leftArr.length && rightArr.length) { // 都有值的时候进行比较
    if (leftArr[0] >= rightArr[0]) {
      arr.push(leftArr.shift())
    } else {
      arr.push(rightArr.shift())
    }
  }

  if (leftArr.length > 0) {
    arr.push.apply(arr, leftArr)
  }
  
  if (rightArr.length > 0) {
    arr.push.apply(arr, rightArr)
  }

  return arr
}

console.log(mergeSort([9, 99, 101, 105, 1000])) // => [1000, 105, 101, 99, 9]