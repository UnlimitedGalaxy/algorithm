import NP from 'number-precision';
/* 
 负数乘除有问题
  // 同级运算从左到右，即加减是从左到右的，即乘除是从左到右的
*/
function fundamentalOperate(formula:string):number {
  formula = formula.replace(/\s+/g, ''); // delete empty character
  
  // 先计算乘除法，从左到右
  // 有两种情况在字符串头部，或者在字符串中部
  const DMRegExp:RegExp = /(^|[+-])(-?\d+)[*/](-?\d+)/

  while (DMRegExp.test(formula)) {
    formula = formula.replace(DMRegExp, (match:string, match1:string, match2:string, match3:string) => {
      let processStr:string = '';
      if (match.indexOf('*') > -1) {
        processStr = String(NP.times(Number(match2), Number(match3)));
      } else if (match.indexOf('/') > -1) {
        processStr = String(NP.divide(Number(match2), Number(match3)));
      }
      return `${match1}${processStr}`;
    });
  }

  const PMRegExp:RegExp = /^(-?\d+)([+-])(-?\d+)/; // 加减法只有一种情况，计算发生在头部
  // 再计算加减法，从左到右
  while (PMRegExp.test(formula)) {
    formula = formula.replace(PMRegExp, (match:string, match1:string,match2:string, match3:string) => {
      if (match2.indexOf('+') > -1) {
        return String(NP.plus(Number(match1), Number(match3)));
      } else if (match2.indexOf('-') > -1) {
        return String(NP.minus(Number(match1), Number(match3)));
      }
      return match;
    });
  }

  return Number(formula);
}

function formulaOperate(formula:string):number {
  while (/\(|\)/.test(formula)) {
    formula = formula.replace(/\(([^)(]+?)\)/, (match:string, fundamentalFormula:any) => String(fundamentalOperate(fundamentalFormula)));
  }
  // 剩下的部分就没有括号了
  return fundamentalOperate(formula);
}

console.log(formulaOperate('-1+-8'));
// console.log(NP.times(-1, -1));



