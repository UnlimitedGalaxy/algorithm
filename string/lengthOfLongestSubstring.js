function lengthOfLongestSubstring1(s) {
  let left = 0, right = 1;
  let maxLength = 1;
  if(s.length < 1) {
    return 0;
  }
  if (s.length === 1) {
    return maxLength;
  }

  for (; right < s.length; right++) {
    const element = s[right];
    for (;left <= right; left++) {
      if(element !== s[left]) {
        break;
      }
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

const s = "abcabcbb";

// lengthOfLongestSubstring1(s);

function lengthOfLongestSubstring2(s) { // success
  let left = 0, right = 1;
  let maxLength = 1;
  if(s.length < 1) {
    return 0;
  }
  if (s.length === 1) {
    return maxLength;
  }

  for (; right < s.length; right++) {
    const element = s[right];
    for (let index= right - 1; index >= left; index--) {
      if(element === s[index]) {
        left = index + 1;
      }
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// lengthOfLongestSubstring2(s);

function lengthOfLongestSubstring3(s) { // success
  let left = 0, right = 1;
  let maxLength = 1;
  if(s.length < 1) {
    return 0;
  }
  const map = {[s[0]]: 1}; // 定义：记录当前window的所有不重复字符的计数

  for (; right < s.length; right++) {
    const element = s[right];
    map[element] = !map[element] ? 1: ++map[element];
    // for (;left <= right; left++) {
    //   map[s[left]] --;
    //   if(map[element] > )
    // }
    while(map[element] > 1) { // 证明存在重复元素
      map[s[left]] --;
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

lengthOfLongestSubstring3(s);