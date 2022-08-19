/**
 * myArr [my own ar]
 * @param {Object} param [param]
 * -> { Number} capacity
 * @return {}  [description]
 */
class MyArr {
  constructor(props = {}) {
    const defaultProps = {
      capacity: 10
    };
    const { capacity } = Object.assign(defaultProps, props);
    this.data = Array.from({ length: capacity });
    // size 总指向下一个空位置
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  getCapacity() {
    return this.data.length;
  }

  isEmpty() {
    return this.size === 0;
  }

  // add element at the end of arr
  addLast(e) {
    // let { data, size } = this;
    // // last time, size become data.length
    // if ( size >= data.length ) {
    // 	throw new Error('addLast failed. Array is stuffed');
    // }
    // data[size] = i;
    // size ++; 归并到add方法

    // if (this.data.length === this.size) {
    // 	this.resize(2 * this.size);
    // } 不应该只放在这里
    this.add(this.size, e);
  }

  addFirst(e) {
    this.add(0, e);
  }

  switchItems(itemAIndex, itemBIndex) {
    if (Array.from(arguments).some((i) => i < 0 || i > this.size)) {
      throw new Error('index out of range');
    };
    let temp = this.data[itemBIndex];
    this.data[itemBIndex] = this.data[itemAIndex];
    this.data[itemAIndex] = temp;
  }

  /*
  * 考虑在头插入和尾插入的极限情况
  * */
  add(index, e) {
    const { size, data } = this;
    if (size === data.length) { // 这句挺关键的
      throw new Error('array is full');
    }
    // 元素应该紧密排列在一起
    if (index < 0 || index > size) { // 也就是说可以等于0可以等于size
      throw new Error('index out of range');
    }
    const iterateNum = size - index;
    /*
    * 循环有正循环也有负循环
    * 正循环：i 是逐渐趋近设定值得
    * 负循环：i 是逐渐远离设定值得，但趋近最小值
    * */
    for (let i = size; i > index; i--) {
      this.switchItems(i, i - 1);
    }

    data[index] = e;
    this.size++;
    if (this.data.length === this.size) {
      this.resize(2 * this.size);
    }
  }

  judgeIndex(index) {
    // 空数组情况：this.size = 0; 输入0，会抛出异常
    if (index < 0 || index >= this.size) {
      throw new Error('Get failed. Index is illegal');
    }
  }
  // 获取
  get(index) {
    this.judgeIndex(index);
    return this.data[index];
  }
  // 修改
  set(index, e) {
    this.judgeIndex(index);
    this.data[index] = e;
  }
  // 是否包含
  contains(e) {
    for (let i = 0; i < size; i++) {
      if (this.data[i] === e) {
        return true;
      }
    }
    return false;
  }
  // find element return index else -1
  find(e) {
    for (let i = 0; i < this.size; i++) {
      if (this.data[i] === e) {
        return i;
      }
    }
    return -1;
  }
  // delete
  remove(index) {
    this.judgeIndex(index);
    let ret = this.data[index];
    for (let i = index + 1; i < this.size; i++) {
      this.data[i - 1] = this.data[i]; // 直接覆盖就可以了这样次数最少
    }
    this.size--;
    this.data[this.size] = null;
    // if (this.size === this.data.length / 2) {
    // 	this.resize(this.data.length / 2);
    // }
    // 优化
    if (this.size === this.data.length / 4 && this.data.length / 2 > 1) {
      this.resize(this.data.length / 2);
    }
    // 移除的element
    return ret;
  }
  removeFirst() {
    return this.remove(0);
  }
  removeLast() {
    // if (this.size === this.data.length / 2) {
    // 	this.resize(this.data.length / 2);
    // } 不合理，不应该加在这里
    return this.remove(this.size - 1);
  }
  // return true 删除成功
  // 这个接口只删除一个e
  removeElement(e) {
    let index = this.find(e);
    if (index != -1) {
      this.remove(index);
      return true;
    } else {
      return false;
    }
  }

  // @Override
  toString() {
    let str = `Array: size = ${this.size}, capacity = ${this.data.length} \n\r [`
    for (var i = 0; i < this.size; i++) {
      str += this.data[i];
      str += ','
    }
    str += ' ]';
    return str;
  }

  resize(newCapacity) {
    if (typeof newCapacity !== 'number' || ! /\d*/.test(newCapacity)) {
      throw new Error('resize fail, newCapacity is illegal')
    }
    let newData = Array.from({ length: newCapacity });
    for (var i = 0; i < this.size; i++) {
      newData[i] = this.data[i];
    }
    this.data = newData;
  }

  getLast() {
    return this.get(this.size - 1);
  }

  getFirst() {
    return this.get(0);
  }
}

exports.MyArr = MyArr;

const myArr = new MyArr({ capacity: 3 });

// myArr.addFirst(1);
// myArr.addLast('last1');
// myArr.add(2, 'last2');
// myArr.addLast('last3');
// console.log(myArr.toString());
// myArr.removeLast();
// myArr.removeElement('last1');
// console.log(myArr.toString());

/*
* conclusion
* 1. iterate method  什么是迭代
* 2. string 拼接
* 3. 界限判断
* 4. 要清楚api的职责
* */

/*
* analyze complexity
* 查找：
* get(1) -> O(1)
* find(e) -> O(n)
* 总结：
* 增： O(n)
* 删： O(n)
* 改： 已知索引O(1); 未知索引O(n)
* 查： 已知索引O(1); 未知索引O(n)
* resize：
  - 在第n+1次的addlast时侯会进行一次resize，而resize是O(n)级别的计算即n
  - 所以在add的情况下，addLast + resize 的复杂度是O(1)级别的 即 (n + n + 1) / (n + 1) 约等于 2 （n等于capacity）
  - removeLast情况下，(n/2 + (n - 1)/2) / (n/2 + 1) 约等于 2
*
* */

/*
* optimize
* 1.防止震荡：只有当减少到1/4的时候，才缩少一半
* */