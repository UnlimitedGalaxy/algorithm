const LinkedList = require('../dummyLinkList').LinkedList
/* 
翻转链表
*/

/* 
思考：
- 每经过一个节点就断开节点
- 将next指向上一个节点

注意：
- 如果处理不好会产生环
*/
function reverseList(headNode) {
  if (!headNode || !headNode.next) return headNode;
  // debugger
  let next = headNode.next; 
  headNode.next = null; 
  let head = headNode;

  for (;next;) {
    let nextNode = next.next;
    next.next = head; // 完成翻转指向
    head = next; // 将当前的对象置为head 
    next = nextNode; // 将next指向为下一个节点
  }
  return head;
}

function reverseList2(headNode) {
  let head = null;
  let cur = headNode;
  // debugger;
  while(cur) {
    let tempNode = cur.next;
    cur.next = head;
    head = cur;
    cur = tempNode;
  }

  return head;
}

/* 
使用后序遍历的话，是找到最后一个节点
最后一个节点可以理解为处理好的
*/
function reverseList3(headNode) {
  if (!headNode || !headNode.next) return headNode;

  let lastNode = reverseList3(headNode.next);

  headNode.next.next = headNode;
  headNode.next = null;
  return lastNode;
}

const link = new LinkedList();
link.addLast(1);
link.addLast(2);
link.addLast(3);

link.dummyHead.next = reverseList3(link.dummyHead.next);
console.log(link.toString());
