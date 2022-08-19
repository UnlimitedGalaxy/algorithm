const Node = require('../BST2').Node;

function layerIterate(root) {
  let queue = [];
    if (root) {
      queue.push(root);
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

const root = new Node(1);

root.left = new Node(2, new Node(4));
root.right = new Node(3);

layerIterate(root);
