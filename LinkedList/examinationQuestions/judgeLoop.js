/* 
方法1
如果true 说明 有环
如果false 说明 没有环
*/
function judgeLoop(cur) {
  if(!cur || !cur.next) return false;
  const set = new Set();
  while(cur) {
    if (set.has(cur)) {
      return true;
    } 
    set.add(cur);
    cur = cur.next;
  }
  return false;
}

const node = {
  e: 1,
  next: {
    e: 2,
    next: {
      e: 3,
      next: null
    }
  }
};
node.next.next.next = node;

// console.log(judgeLoop(node));

/* 
使用快慢指针
*/
function judgeLoop2(cur) {
  if(!cur || !cur.next) return false;
  let slow = cur;
  let fast = cur.next;
  while(fast) {
    if(slow === fast) return true;
    slow = slow.next;
    fast = fast.next ? fast.next.next: fast.next;
  }
  return false;
}

console.log(judgeLoop2(node));

