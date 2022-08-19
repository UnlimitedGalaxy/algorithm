const Node = require('../BST2').Node;

function isValidBST(root) {
  return helper2(root, -Infinity, Infinity);
}

function helper(root, min, max) {
  if (root === null) return true;
  if (root.val <= min || root.val >= max) {
    return false;
  }
  return helper(root.left, min, root.val) && helper(root.right, root.val, max);
}

function helper2(root, min, max) {
  if (root === null) return true;
  if (root.value <= min || root.value >= max) {
    return false;
  }
  return helper2(root.left, min, root.value) && helper(root.right, root.value, max);
}

const root = new Node(10);

root.left = new Node(3 ,new Node(2), new Node(4));
root.right = new Node(13, new Node(11), new Node(14));

console.log(isValidBST(root));
