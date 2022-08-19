interface NodeInterface {
	e: any; // element any
	left: NodeInterface; // index
	right: NodeInterface;
}

class MyNode<E> {
	e: E;
	left: NodeInterface;
	right: NodeInterface;
	
	constructor(e: E) {
		this.e = e;
		this.left = null;
		this.right = null;
	}
	
}

class BST<E> {
	private root: NodeInterface;
	private size: number;
	
	constructor() {
		this.root = null;
		this.size = 0;
	}
}

