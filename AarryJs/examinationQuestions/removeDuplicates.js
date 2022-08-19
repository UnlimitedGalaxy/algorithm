function removeDuplicates1(nums) {
  let arr = [];
  for (let i=0; i < nums.length - 1; i ++) {
    if(nums[i] === nums[i + 1]) {
      arr.push(i + 1);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    
  }
}

function removeDuplicates2(nums) {
  let slowIndex = 1; // 指向最后一位不重复位置 + 1
  let fastIndex = 1;
  function swap(index, index2) {
    [nums[index], nums[index2]] = [nums[index2], nums[index]];
  }
  for (; fastIndex < nums.length ; fastIndex ++) {
    if(nums[slowIndex - 1] !== nums[fastIndex]) {
      if(slowIndex !== fastIndex) {
        swap(slowIndex, fastIndex);
      }
      slowIndex ++;
    }
  }
  return slowIndex;
}