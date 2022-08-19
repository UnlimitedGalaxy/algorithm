const MyStack = require('./stack').MyStack;
const assert = require('assert');

/*
* 题目
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。
* */
/*
* conclusion:
* 1. open brackets push into stack
* 2. check the closing brackets is match the bracket
* */
/*
* judge if it is valid
* */
function isBracketMatch(str) {
  let stack = new MyStack();
  let chars = ['}', ']', ')'];
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    if (currentChar === '{' || currentChar === '[' || currentChar === '(') {
      stack.push(currentChar);
    } else if (chars.includes(currentChar)) {
      if (stack.isEmpty()) {
        continue;
      }
      debugger;
      let topChar = stack.pop();
      if (topChar === '{' && currentChar !== '}') {
        return false;
      }
      if (topChar === '[' && currentChar !== ']') {
        return false;
      }
      if (topChar === '(' && currentChar !== ')') {
        return false;
      }
    }
  }
  debugger;
  return stack.isEmpty()
}

function isBracketMatchB(str) {
  if (typeof str !== 'string') {
    return false;
  }
  if (str.length === 0) {
    return true;
  }
  if (str.length === 1) {
    return false;
  }
  // 题目说是会给一个包含'}', ']', ')', '{', '[', '('的字符串，就是说肯定有这个
  if (str.includes('{') || str.includes('[') || str.includes('(') || str.includes('}') || str.includes(']') || str.includes(')')) {
    let stack = [];
    let chars = ['}', ']', ')', '{', '[', '('];

    stack.isEmpty = function () {
      return this.length === 0;
    }
    for (let i = 0; i < str.length; i++) {
      const currentChar = str[i];
      if (currentChar === '{' || currentChar === '[' || currentChar === '(') {
        stack.push(currentChar);
      } else if (chars.includes(currentChar)) {
        // stack是空的但是居然有一下情况出现，认为是错误的 -> 即顺序不正确
        if (stack.isEmpty() && (currentChar === '}' || currentChar === ']' || currentChar === ')')) {
          return false;
        }
        let topChar = stack.pop();
        if (topChar === '{' && currentChar !== '}') {
          return false;
        }
        if (topChar === '[' && currentChar !== ']') {
          return false;
        }
        if (topChar === '(' && currentChar !== ')') {
          return false;
        }
      }
    }
    return stack.isEmpty();
  } else {
    return false;
  }

}

/*
* 测试
* 1. 应该先测试一个字符的情况，再慢慢增加
* 2. 先想清楚测试用例，再继续
* */
// 没有字符的情况
assert.equal(isBracketMatchB(''), true);
// 一个字符的情况
assert.equal(isBracketMatchB('a'), false);
assert.equal(isBracketMatchB(']'), false);
// 两个字符的情况
assert.equal(isBracketMatchB('ab'), false);
assert.equal(isBracketMatchB('a]'), false);
assert.equal(isBracketMatchB('[a'), false);
assert.equal(isBracketMatchB('[]'), true);
// 三个字符的情况
assert.equal(isBracketMatchB('a[b'), false);
assert.equal(isBracketMatchB('ab]'), false);
assert.equal(isBracketMatchB('[ab'), false);
assert.equal(isBracketMatchB('[a]'), true);
assert.equal(isBracketMatchB('[])'), false);
// console.log(isBracketMatchB('}'));

