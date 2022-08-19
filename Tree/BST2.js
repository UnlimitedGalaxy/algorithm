/*
 *
 * 需要实现的方法
 *
 * */
class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left || null;
    this.right = right || null;
    this.isVisited = false;
  }
}

exports.Node = Node;
class BTS {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  searchNode(root, target) {
    if (root == null) {
      return null;
    }
    // 去左子树搜索
    if (root.val > target) {
        return searchBST(root.left, target);
    }
    // 去右子树搜索
    if (root.val < target) {
        return searchBST(root.right, target);
    }
    return root;
  }

  add(...value) {
    const values = value.reduce((acc, i) => {
      // 压平参数
      if (Array.isArray(i)) {
        return acc.concat(i);
      } else {
        acc.push(i);
        return acc;
      }
    }, []);
    values.forEach((value) => {
      this.root = this._add(this.root, value);
    });
  }

  /*
		@description
		- 主要是返回一个根节点
		- 如果是空节点就构造一个
		- 如果不是空节点，就找到一个空节点返回
			-- 值小于节点值 入左节点；值大于节点值 入右节点 4. 等于的情况下不做处理
	* */
  _add(node, value) {
    if (node === null) {
      this.size++;
      return new Node(value);
    }
    if (node.value < value) {
      node.right = this._add(node.right, value);
    }
    if (node.vlaue > value) {
      node.left = this._add(node.left, value);
    }
    return node;
  }

  contains(value) {
    return this._contains(this.root, value);
  }

  /*
   *
   * */
  _contains(node, value) {
    if (node === null) {
      return false;
    }
    if (node.value === value) {
      return true;
    }
    if (value < node.value) {
      return this._contains(node.left, value);
    }
    if (value > node.value) {
      return this._contains(node.right, value);
    }
    return false;
  }

  // 先序遍历，递归
  preOrder() {
    this._preOrder(this.root);
  }

  _preOrder(node) {
    if (node === null) {
      return;
    }
    console.log(node.value);
    this._preOrder(node.left);
    this._preOrder(node.right);
  }

  // 非递归；
  preOrderNR() {
    let stack = [];
    let p = this.root;

    while (stack.length || p !== null) {
      while (p !== null) {
        console.log(p.value);
        stack.push(p);
        p = p.left;
      }
      let q = stack.pop();
      p = q.right;
    }
  }

  // 层序遍历 使用队列
  /*
	原理
	- 利用队列的先入先出的特性
	- 迭代条件队列里面还有节点
	实现
	- 循环体里面只处理一个节点
	- 打印值
	- 如果有左节点，放入左节点
	- 如果有右节点，放入右节点
	*/
  levelOrder() {
    let queue = [];
    if (this.root) {
      queue.push(this.root);
    }
    while (queue.length) {
      let cur = queue.shift();
      console.log(cur.value);

      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
  }

  toString() {}
}

exports.BTS = BTS;

// let bst = new BTS();
// bst.add(1, 2, 3, 4);
// bst.levelOrder();
