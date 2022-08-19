const DoubleLink = require('../DoubleLink').DoubleLink;
const Node = require('../DoubleLink').Node;

/* 
map
- 存key 和 Node
- 为什么不是 value？是因为node的话，可以用来直接删除节点，如果是value，是需要遍历来找node的

*/
class LRUCache {
  
  constructor(capacity) {
      this.cap = capacity; // 容量
      this.map = new Map(); 
      this.cache = new DoubleLink();
  }

  /* 
    作用：
    在get的时候需要将节点提到最前
  */
  makeRecently(key) { 
    const x = this.map.get(key);
    this.cache.remove(x);
    this.cache.addLast(x);
  }

  /* 
    作用：
    添加新数据
  */
  addRecently(key, val) {
    // 链表添加到最后
    const node = new Node(key, val);
    this.cache.addLast(node);
    // map 添加数据
    this.map.set(key, node);
  }

  deleteKey(key) {
    const x = this.map.get(key);
    this.cache.remove(x);
    this.map.delete(key);
  }

  removeLeastRecently() {
    const deleteNode = this.cache.removeFirst();
    if(deleteNode) {
      this.map.delete(deleteNode.key);
    }
  }

  /* 
  逻辑：
  - 获取节点对应的值
  - 并且将节点提到最前
  */
  get(key) {
    const node = this.map.get(key);
    let value = -1;
    if(node) {
      value = node.value;
      this.makeRecently(node.key);
    }
    return value;
  }

  /* 
  逻辑：
  - 有key
    - 更新链表
      - 删除node，并且，将新node添加到最后
    - 更新map
  
  - 没有key
    - 更新链表
      - 如果超过了cap，删除头节点
      - 新建节点，添加到链表的最后
    - 更新map

  */
  put(key, value) {
    if(this.map.has(key)) {
      this.deleteKey(key);
      this.addRecently(key, value);
      return;
    }

    if(this.cap === this.cache.size) {
      this.removeLeastRecently();
    }
    this.addRecently(key, value);
  }
}

const lru = new LRUCache();
lru.put(1, 1);
lru.put(2, 2);
const value1 = lru.get(1);