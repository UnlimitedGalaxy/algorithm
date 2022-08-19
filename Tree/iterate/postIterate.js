const Node = require('../BST2').Node;

function postIterate(root) {
  const res = [];
  
  traverse(root, res);

  return res;
}

function traverse(root, res) {
  if(root === null) return;
  traverse(root.left, res);
  traverse(root.right, res);
  res.push(root.value);
}

const root = new Node(1);

root.left = new Node(2, new Node(4));
root.right = new Node(3);

/* 
预测结果：[4, 2, 3, 1];
*/

// postIterate(root); // 结果 4，,2，3，1

/* 
问题在于
1. 处理完叶子节点后，获取到的curNode还是上级节点，这个会导致重复添加叶子节点，造成死循环
解决
1. 是不是，如果遍历过的节点，是应该设置为isVisited，然后就不遍历了
*/
function postIterate2(root) {
  const res = [];
  const stack = [];
  stack.push(root);

  while(stack.length >0) {
    const curNode = stack[stack.length - 1];

    if ((curNode.left === null && curNode.right === null) || curNode.isVisited) {
      const leafNode = stack.pop();
      res.push(leafNode.value);
    } else {
      if (curNode.right) {
        stack.push(curNode.right);
      }
      if (curNode.left) {
        stack.push(curNode.left);
      }
      curNode.isVisited = true;
    }
  }

  return res;
}

postIterate2(root)