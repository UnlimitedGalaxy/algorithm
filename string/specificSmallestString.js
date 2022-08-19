/* 
1663. 具有给定数值的最小字符串
*/
/* 
@param n {number} 长度
@param k {number} 数值
*/
var getSmallestString = function(n, k) {
  debugger;
  let result = []; // number[]

  function iterate(innerN) {
    if (innerN === 1) {
      calculate();
      return;
    }
    iterate(innerN - 1);
    calculate();
  }

  iterate(n);

  function calculate() {
    let r = k - n + 1;
      r = Math.min(r, 26);
      n --;
      k -= r;
      result.unshift(r)
  }

  result = String.fromCharCode.apply(null, result.map((value) => value + 96));

  return result;
};

getSmallestString(3, 28);
