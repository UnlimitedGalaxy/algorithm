// 最小堆
class MinHeap {
  constructor() {
    this.heap = []; // 堆以数组表示
  }

  /**
   * @description: 插入操作
   * @param {*} val
   */
  insert(value) {
    this.heap.push(value);
    this.moveUp(this.heap.length - 1);
  }

  /**
   * @description: 删除堆顶
   */
  pop() {
    debugger;
    this.heap[0] = this.heap.pop();
    this.moveDown(0);
  }

  /**
   * @description: 获取堆顶
   * @return {*}
   */
  top() {
    return this.heap[0];
  }

  /**
   * @description: 获取堆的大小
   * @param {*}
   * @return {number} 堆长度
   */
  size() {
    return this.heap.length;
  }

  /**
   * @description: 获取当前元素的父元素的index
   * @param {*} index
   * @return {number}
   */
  getParentIndex(index) {
    return (index - 1) >> 1;
    // return Math.floor((index - 1) / 2)
  }

  /**
   * @description: 获取当前元素的左子元素的index
   * @param {*} index
   * @return {number}
   */
  getLeftIndex(index) {
    return index * 2 + 1;
  }

  /**
   * @description: 获取当前元素的右子元素的index
   * @param {*} index
   * @return {number}
   */
  getRightIndex(index) {
    return index * 2 + 2;
  }

  /**
   * @description: 将当前元素与他的父元素的大小进行比较，当父元素值大于子元素时，交换两个元素，
   *               递归操作
   * @param {*} index
   * @return {*}
   */
  moveUp(index) {
    const parentIndex = this.getParentIndex(index);
    if (this.heap[index] < this.heap[parentIndex]) {
      this.change(index, parentIndex);
      this.moveUp(parentIndex);
    }
  }
  /**
   * @description: 将当前元素与他的左右子元素的大小进行比较，当父元素值大于左子元素时，交换两个元素，
   *               递归操作；右子元素操作相同
   * @param {*} index
   * @return {*}
   */
  moveDown(index) {
    let leftIndex = this.getLeftIndex(index);
    let rightIndex = this.getRightIndex(index);
    if (this.heap[index] > this.heap[leftIndex]) {
      this.change(index, leftIndex);
      this.moveDown(leftIndex);
    }
    if (this.heap[index] > this.heap[rightIndex]) {
      this.change(index, rightIndex);
      this.moveDown(rightIndex);
    }
  }
  // 交换两个元素的封装方法
  change(index1, index2) {
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }
}

const h = new MinHeap();
let ary = [6, 3, 8, 5, 5, 5, 7, 2];
ary.map(item=>{
  h.insert(item);
});

debugger;


