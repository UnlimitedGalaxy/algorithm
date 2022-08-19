/* 
问题：在树里面查找路径
*/
function iterate(tree, t) {
  if (tree.val === t[0]) {
    t.shift()
  }
  if (!t.length) return
  if (tree.left) {
    iterate(tree.left, t)
  }
  if (tree.right) {
    iterate(tree.right, t)
  }
}

function iterate2(tree, t) {
  if (!t.length) return
  if (tree.left) {
    iterate2(tree.left, t)
  }
  if (tree.val === t[0]) {
    t.shift()
  }
  if (tree.right) {
    iterate2(tree.right, t)
  }
}

function checkPath(tree, path) {
  const t = []
  let v = path
  while (v) {
    t.push(v.val)
    v = v.next
  }
  let newT = [...t]
  console.log(newT)
  iterate(tree, newT)
  console.log(newT)
  if (!newT.length) {
    return true
  }

  newT = [...t]
  iterate2(tree, newT)
  if (!newT.length) {
    return true
  }
  return false
}

const path = {
  val: 2,
  next: {
    val: 1,
    next: {
      val: 3,
      next: null
    }
  }
}

const tree = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  }
}

console.log(checkPath(tree, path))