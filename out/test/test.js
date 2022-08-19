"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var number_precision_1 = require("number-precision");
/*
 负数乘除有问题
  // 同级运算从左到右，即加减是从左到右的，即乘除是从左到右的
*/
function fundamentalOperate(formula) {
    formula = formula.replace(/\s+/g, ''); // delete empty character
    // 先计算乘除法，从左到右
    // 有两种情况在字符串头部，或者在字符串中部
    var DMRegExp = /(^|[+-])(-?\d+)[*/](-?\d+)/;
    while (DMRegExp.test(formula)) {
        formula = formula.replace(DMRegExp, function (match, match1, match2, match3) {
            var processStr = '';
            if (match.indexOf('*') > -1) {
                processStr = String(number_precision_1.default.times(Number(match2), Number(match3)));
            }
            else if (match.indexOf('/') > -1) {
                processStr = String(number_precision_1.default.divide(Number(match2), Number(match3)));
            }
            return "" + match1 + processStr;
        });
    }
    var PMRegExp = /^(-?\d+)[+-](-?\d+)/; // 加减法只有一种情况，计算发生在头部
    // 再计算加减法，从左到右
    while (PMRegExp.test(formula)) {
        formula = formula.replace(PMRegExp, function (match, match1, match2) {
            if (match.indexOf('+') > -1) {
                return String(number_precision_1.default.plus(Number(match1), Number(match2)));
            }
            if (match.indexOf('-') > -1) {
                return String(number_precision_1.default.minus(Number(match1), Number(match2)));
            }
            return match;
        });
    }
    return Number(formula);
}
function formulaOperate(formula) {
    while (/\(|\)/.test(formula)) {
        formula = formula.replace(/\(([^)(]+?)\)/, function (match, fundamentalFormula) { return String(fundamentalOperate(fundamentalFormula)); });
    }
    // 剩下的部分就没有括号了
    return fundamentalOperate(formula);
}
console.log(formulaOperate('-1+-8'));
// console.log(NP.times(-1, -1));
//# sourceMappingURL=test.js.map