class Node {
  constructor(key, value, prev, next) {
    this.key = key;
    this.value = value;
    this.prev = prev || null;
    this.next = next || null;
  }
}
/*
问题
- 对于插入操作，应该是会O(n)吧，
*/
class DoubleLink {
  constructor() {
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.size = 0;
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  addLast(x) {
    const tail = this.tail;
    x.prev = tail.prev;
    x.next = tail;
    tail.prev.next = x;
    tail.prev = x;
    this.size++;
  }

  addLastValue(n) {
    const newNode = new Node(n, n);
    this.addLast(newNode);
  }

  // 删除链表中的 x 节点（x 一定存在）
    // 由于是双链表且给的是目标 Node 节点，时间 O(1)
  remove(x) {
    x.prev.next = x.next;
    x.next.prev = x.prev;
    this.size--;
  }
  
  // 删除链表中第一个节点，并返回该节点，时间 O(1)
  removeFirst() {
    if (this.head.next == this.tail)
        return null;
    const first = this.head.next;
    this.remove(first);
    return first;
  }

  removeLast() {
    if (this.head.next == this.tail)
        return null;
    const last = this.tail.prev;
    this.remove(last);
    return last;  
  }

  // 返回链表长度，时间 O(1) 直接用size 值
  // size() { return this.size; }

  // true 的话 就是empty
  isEmpty() {
    return this.size === 0
  }

  /* 
  return value 是 一个数值
  */
  getLastValue() {
    if (this.head.next == this.tail)
        return null;
    return this.tail.prev.value;
  }

  /* 
  return value 是 一个数值
  */
  getFirstValue() {
    if (this.head.next == this.tail)
        return null;
    return this.head.next.value;
  }
}

const dl = new DoubleLink();
const node1 = new Node(1, 1);
const node2 = new Node(2, 2);
dl.addLast(node1);
dl.addLast(node2);
dl.removeFirst();

module.exports.DoubleLink = DoubleLink;
module.exports.Node = Node;