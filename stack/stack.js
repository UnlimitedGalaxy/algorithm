/* target
* . push
* . pop
* . peek
* . getSize
* . isEmpty
* */

const MyArr = require('../AarryJs/arrClass').MyArr;

class MyStack {
  constructor(props) {
    this.myArr = new MyArr(props);
  }

  push(e) {
    this.myArr.addLast(e);
  }

  pop() {
    return this.myArr.removeLast();
  }

  peek() {
    return this.myArr.getLast();
  }

  getSize() {
    return this.myArr.getSize();
  }

  isEmpty() {
    return this.getSize() === 0;
  }

  toString() {
    const size = this.getSize();
    let str = `Array: size = ${size}\n\r [`
    for (var i = 0; i < size; i++) {
      str += this.myArr.get(i);
      if (i !== (size - 1)) {
        str += ','
      }
    }
    str += ' ] top ' + this.peek();
    return str;
  }
}

exports.MyStack = MyStack;
let myStack = new MyStack();
// console.log('isEmpty:', myStack.isEmpty());
// for (let i = 0; i < 4; i++ ) {
// 	myStack.push(i);
// }
// myStack.pop();
// console.log('getSize', myStack.getSize());
// console.log(myStack.toString());
