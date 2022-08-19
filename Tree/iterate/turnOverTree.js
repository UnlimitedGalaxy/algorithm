const Node = require('../BST2').Node;


function invertTree(root) {
  if(root === null) return root;
  invertTree(root.left);
  [root.right, root.left] = [root.left, root.right];
  invertTree(root.left);
}

const root = new Node(1);

root.left = new Node(2, new Node(4), new Node(5));
root.right = new Node(3, new Node(6), new Node(7));

// invertTree(root);
// console.log(root);

function invertTree2(root) {
  if(root === null) return root;
  const left = invertTree2(root.left);
  const right = invertTree2(root.right);
  [root.right, root.left] = [left, right];
  return root;
}

invertTree2(root);
console.log(root);



