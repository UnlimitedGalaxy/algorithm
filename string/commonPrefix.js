/**
 * @param {string[]} strs
 * @return {string}
 */
/* 
  使用纵向扫描法
*/
var longestCommonPrefix = function(strs) {
  let result = [];
  for(let i = 0; i >= 0; i++) {
    let breakSymbol = false;
    strs.forEach((str, index) => {
      if(index === 0) {
        result.push(str.charAt(i));
      } else {
        if (str[i] !== result[i]) {
          result.pop();
          breakSymbol = true;
        }
      }
    });
    if (breakSymbol) break; 
  }
  return result.join('');
};

/* 
  使用分治
*/
function longestCommonPrefix2(strs) {
  if (strs.length <=1) return strs[0];
  debugger;
  const mid = Math.ceil(strs.length / 2);
  const prefixLeft = longestCommonPrefix2(strs.slice(0, mid));
  const prefixRight = longestCommonPrefix2(strs.slice(mid));

  let prefixStr = '';
  for (let index = 0; index < Math.min(prefixLeft.length, prefixRight.length); index++) {
    if (prefixLeft[index] === prefixRight[index]) {
      prefixStr += prefixLeft[index]
    } else {
      break;
    }
  }
  return prefixStr;
}

const prefix = longestCommonPrefix2(['12', '123']);

console.log(prefix);