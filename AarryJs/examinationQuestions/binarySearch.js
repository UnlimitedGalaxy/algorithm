function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1; // 注意

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target)
      left = mid + 1; // 注意
    else if (nums[mid] > target)
      right = mid - 1; // 注意
  }
  return -1;
}

const a = [1, 2, 4, 5]
// binarySearch(a, 5);

function randomBinarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1; // 注意

  while (left <= right) {
    let mid = left + Math.floor(Math.random() * (right - left + 1));
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target)
      left = mid + 1; // 注意
    else if (nums[mid] > target)
      right = mid - 1; // 注意
  }
  return -1;
}

randomBinarySearch(a, 5);