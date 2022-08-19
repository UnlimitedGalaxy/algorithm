const Node = require('./node').Node;

class LinkedList {

  constructor() {
    this.size = 0;
    this.dummyHead = new Node(); // define: save the index of node
    /* 
      如果没有dummyHead 会怎么样？
      答：很多操作 都需要再加条件 判断是否是在操作头部的情况
    */

  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  addFirst(e) {
    // let node = new Node(e);
    // node.next = head;
    // this.head = node;
    this.add(0, e);
  }

  addLast(e) {
    this.add(this.size, e);
  }

  add(pos, e) {
    if (pos < 0 || pos > this.size) { 
      /* 
        思考为什么是要大于this.size 
        答：也就是说 可以等于 size
        为什么不是 this.size +- n 呢？
        
      */
    
      throw new Error('Add failed, Illegal pos');
    }
    let prev = this.dummyHead;
    for (let i = 0; i < pos; i++) {
      prev = prev.next;
    }
    prev.next = new Node(e, prev.next);
    this.size++;
    // if (pos === 0) {
    // 	this.addFirst(e);
    // } else {
    // 	let prev = this.findElement(pos - 1); // 目标位置的前一个元素就可以了
    // 	prev.next = new Node(e, prev.next);
    // 	this.size ++;
    // }
  }

  remove(pos) {
    if (pos < 0 || pos > this.size) {
      throw new Error('remove failed, Illegal pos');
    }
    let prev = this.dummyHead;
    for (let i = 0; i < pos; i++) {
      prev = prev.next;
    }
    let cur = prev.next
    prev.next = cur.next;
    cur.next = null;
    this.size--;
  }

  removeFirst() {
    this.remove(0);
  }

  removeLast() {
    this.remove(this.size - 1);
  }

  findElement(pos) {
    let temp = this.head; // 如果是O的时候不成立；根本不会返回一个node，后续的操作就会错误
    for (let i = 0; i < pos; i++) {
      temp = temp.next;
    }
    return temp;
  }

  /*
  * @param index {number}
  * @return value {}
  * */
  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('Add failed, Illegal index');
    }

    let cur = this.getNode(index);
    return cur ? cur.e : ''; //有可能是undefined的value
  }

  getNode(index) {
    let cur = this.dummyHead.next;
    for (let i = 0; i < index; i++) cur = cur.next;
    return cur;
  }

  getFirst() {
    return get(0);
  }

  getLast() {
    return get(this.size - 1);
  }

  set(index, e) {
    if (index < 0 || index >= this.size) {
      throw new Error('Add failed, Illegal index');
    }

    let cur = this.getNode(index);
    cur.e = e;
  }

  contains(e) {
    let cur = this.dummyHead.next;
    while (cur) {
      if (cur.e === e) {
        return true;
      } else {
        cur = cur.next;
      }
    }
    return false;
  }

  toString() {
    let finalStr = '';
    // let cur = this.dummyHead.next;
    // while(cur) {
    // 	finalStr += `${cur.e} -> `
    // }
    for (let cur = this.dummyHead.next; cur; cur = cur.next)
      finalStr += `${cur.e} -> `;
    finalStr += 'null';
    return finalStr;
  }
}

exports.LinkedList = LinkedList;

// const link = new LinkedList();
// link.addLast(1);
// console.log(link.toString());