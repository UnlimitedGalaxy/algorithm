const MyArr = require('../AarryJs/arrClass').MyArr;

/*
* feature:
* 1. don't have the get method
* */
class Queue {
  constructor(capacity) {
    this.myQueue = new MyArr({ capacity: capacity || 10 });
  }

  enqueue(e) {
    this.myQueue.addLast(e);
  }

  dequeue() {
    return this.myQueue.removeFirst();
  }

  getFront() {
    return this.myQueue.getFirst();
  }

  getSize() {
    return this.myQueue.getSize();
  }

  isEmpty() {
    return this.myQueue.isEmpty();
  }

  getCapacity() {
    return this.myQueue.getCapacity();
  }

  toString() {
    const size = this.getSize();
    let str = `Queue: size = ${size}\n\r front [`
    for (var i = 0; i < size; i++) {
      str += this.myQueue.get(i);
      if (i !== (size - 1)) {
        str += ','
      }
    }
    str += '] tail';
    return str;
  }
}

/*
* feature：
* 1. front == tail represent queue is empty
* 2. 会有意识地浪费一个空间
* 3. (tail + 1) % c === front 整体其实是在求余
* 4. 记住tail不是指向最后一个元素，而是指向最后一个元素的后一个元素
* */
class LoopQueue {
  constructor(capacity) {
    this.data = Array.from({ length: capacity || 10 });
    this.front = 0;
    this.tail = 0;
    this.size = 0; //实际存在的元素有多少个
  }

  getCapacity() {
    return this.data.length - 1; // 少一个
  }

  isEmpty() {
    return this.front == this.tail;
  }

  getSize() {
    return this.size;
  }

  isFull() {
    // 什么叫满，容器装不下，就叫满了
    // 当tail最后一个空格的位置，再加一就去到了front的位置，就叫满了
    return (this.tail + 1) % this.data.length
  }

  enqueue(e) {
    if ((this.tail + 1) % this.data.length === this.front) {
      this.resize(this.getCapacity() * 2);
    }
    this.data[this.tail] = e;
    // 不能越界，一旦越界了需要返回来
    this.tail = (this.tail + 1) % this.data.length;

    this.size++
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('can not  dequeue from an empy queue');
    }
    let outElement = this.data[this.front];
    this.data[this.front] = null;
    this.front = (this.front + 1) % this.data.length;
    this.size--;
    if (this.size === (this.getCapacity() / 4) && (this.getCapacity() / 2) !== 0) {
      this.resize(this.getCapacity() / 2);
    }
    return outElement;
  }

  getFront() {
    if (this.isEmpty()) {
      throw Error('queue is empty');
    }
    return this.data[this.front];
  }

  resize(newCpaacity) {
    const newData = Array.from({ length: newCpaacity || 10 });
    for (let i = 0; i < this.getSize(); i++) {
      // 从新数据的头开始, 因为是循环队列会出现越界行为，需要求余
      newData[i] = this.data[(i + this.front) % this.data.length];
    }
    this.data = newData;
    this.front = 0;
    this.tail = this.size;
  }

  toString() {
    let str = `queue: size = ${this.size}, capacity = ${this.getCapacity()}, front = ${this.front}, tail = ${this.tail}\n\r [`
    for (let i = this.front; i != this.tail; i = (i + 1) % this.data.length) {
      str += this.data[i];
      if (((i + 1) % this.data.length) != this.tail) { // 此时是最后一个元素
        str += ','
      }
    }
    str += ' ] tail';
    return str;
  }
}
// const myQueue = new LoopQueue(10);
// myQueue.enqueue('1');
// console.log(myQueue.toString());

function test() {
  const myQueue = new Queue(10);
  for (let i = 0; i < 10; i++) {
    myQueue.enqueue(i);
    console.log(myQueue.toString());
    if (i % 3 == 2) {
      myQueue.dequeue();
      console.log(myQueue.toString());
    }
  }
}

function testQueue(count, Queue) {
  let myQueue = new Queue();
  let nowTime = Date.now();
  for (var i = 0; i < count; i++) {
    myQueue.enqueue(i);
  }
  for (var i = 0; i < count; i++) {
    myQueue.dequeue();
  }
  let endTime = Date.now();
  return endTime - nowTime;
}

// console.log('time; ', testQueue(100000, Queue)); // 7700ms
console.log('time; ', testQueue(100000, LoopQueue)); // 42ms (bravo)