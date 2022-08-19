/* 
思路
1. 遍历整个字符串
2. 以当前字符为中心进行扩散

问题：
- 为什么要进行两次extend
*/
var longestPalindrome = function(s) {
  let res = '';
  // debugger;

  for(let i = 0; i < s.length; i ++) {
    let s1 = extendPalindrome(s, i, i);
    let s2 = extendPalindrome(s, i, i+1);

    res = res.length > s1.length ? res: s1;
    res = res.length > s2.length ? res: s2;
  }

  return res;
};

function extendPalindrome(s, l, r) {
  while(l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
    l --;
    r ++;
  }
  return s.substring(l+1, r);
}

longestPalindrome('bb');