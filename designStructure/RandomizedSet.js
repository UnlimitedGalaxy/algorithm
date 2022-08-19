class RandomizedSet {
  constructor() {
    this.nums = [];
    this.valToIndex = new Map();
  }

  insert(val) {
    if (this.valToIndex.has(val)) return false;

    this.nums.push(val);
    this.valToIndex.set(val, this.nums.length - 1);
    return true;
  }

  remove(val) {
    if (!this.valToIndex.has(val)) return false;

    /* 
      交换尾部的位置
      - 更新尾部val的index
      删除
      - 删除map上的数据
      - 删除尾部数据
    */
    this.swap(this.valToIndex.get(val), this.nums.length -1);
    this.nums.pop();
    this.valToIndex.delete(val);
    return true;
  }
  
  swap(index1, index2) {
    const nums = this.nums;
    this.valToIndex.set(nums[index1], index2);
    this.valToIndex.set(nums[index2], index1);
    [nums[index1], nums[index2]] = [nums[index2], nums[index1]];
  }

  getRandom() {
    const randomIndex = Math.floor(Math.random() * this.nums.length);
    return this.nums[randomIndex];
  }
}

// const rs = new RandomizedSet();
// const obj1 = ["RandomizedSet","insert","remove","insert","getRandom","remove","insert","getRandom"];
// const obj2 = [[],[1],[2],[2],[],[1],[2],[]];
// const obj3 = {3: 3};
// const obj4 = {4: 4};
// rs.insert(obj1);
// rs.insert(obj2);
// // rs.insert(obj3);
// // rs.insert(obj4);

// // rs.remove(obj1);
// console.log(rs.getRandom())
// console.log(rs.getRandom())
// console.log(rs.getRandom())

const randomizedSet = new RandomizedSet();
randomizedSet.insert(0); // 向集合中插入 1 。返回 true 表示 1 被成功地插入。
randomizedSet.insert(1); // 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
randomizedSet.remove(0); // 返回 false ，表示集合中不存在 2 。
randomizedSet.insert(2); // 2 已在集合中，所以返回 false 。
// console.log(randomizedSet.getRandom()); // getRandom 应随机返回 1 或 2 。
randomizedSet.remove(1); // 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
console.log(randomizedSet.getRandom()); // 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。


