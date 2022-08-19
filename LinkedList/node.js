class Node {
  constructor(e, next) {
    this.e = (e || e === 0) ? e : null;
    this.next = next || null;
  }

  toString() {
    return this.e.toString();
  }

}

exports.Node = Node;
