/**
 * Definition for singly-linked list.

 */
/* 
循环的方式
1.新建一个list，循环比较两个链表
2.

*/
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const newList = new ListNode(-1);
  let d = newList; // 这里是赋值，而不是将链表链接起来 let next = newList.next
  // debugger
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      d.next = list1;
      list1 = list1.next;
    } else {
      d.next = list2;
      list2 = list2.next;
    }

    d = d.next;
  }

/*   while(list1) {
    next = list1;
    list1 = list1.next; 
    错误根本不用
  } */

  if(list1) {
    d.next = list1
  } else if (list2) {
    d.next = list2
  }

/*   while(list2) {
    next = list2;
    list1 = list1.next;
  } */

  return newList.next;
};

let l1 = {
  val:1,
  next: {
    val: 2,
    next: null,
  }
}
let l2 = {
  val:1,
  next: {
    val: 2,
    next: null,
  }
}
mergeTwoLists(l1, l2);