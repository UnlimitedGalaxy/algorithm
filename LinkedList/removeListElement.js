const LinkedList = require('./index').LinkedList;
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 输入: 1->2->6->3->4->5->6, val = 6
 输出: 1->2->3->4->5
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
/*
* just like a kite connected by a wire. Beside, I have nothing.
* IT doesn't like a array which can know the size of the array
* */
var removeElements = function (head, val) {
  if (!head) {
    return head;
  }
  // 链表头就是
  if (head && head.e === val && head.next === null) {
    head = head.next;
    return head;
  }

  // multiple elements 下面的循环起码要有两个element才能成立
  let cur = head;
  while (cur) {
    debugger;
    if (cur.next && cur.next.e === val) {  // 在链表尾部的时候，指向的是null
      cur.next = cur.next.next;
    }
    cur = cur.next;
  }
};

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function iterateRMElements(head, val) {
  if (head === null) {
    return null;
  }
  iterateRMElements(head.next, val);
}

let list = new LinkedList();

for (let i = 0; i < 5; i++) {
  list.addFirst(i);
}
console.log(list.toString());


removeElements(list.dummyHead, 1);
console.log('after delete：', list.toString());
/*
* head refer a empty element
* the list just has a one element
* the list has multiple elements
* in the case that the val on the tail of the list
* */