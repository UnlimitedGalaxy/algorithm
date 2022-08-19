const Node = require('../BST2').Node;

function diameterOfBinaryTree(root) {
  let maxDiameter = 0;

  function traverse(root) {
    if (root === null) return 0;
    const leftDepth = traverse(root.left);
    const rightDepth = traverse(root.right);

    const depth = Math.max(leftDepth, rightDepth) + 1;

    const newDiameter = leftDepth + rightDepth;
    maxDiameter = Math.max(maxDiameter, newDiameter);

    return depth;
  }
  traverse(root);
  return maxDiameter;
}

const root = new Node(1);

root.left = new Node(2, new Node(4));
root.right = new Node(3, new Node(6), new Node(7));

diameterOfBinaryTree(root)