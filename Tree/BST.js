var MyNode = (function () {
    function MyNode(e) {
        this.e = e;
        this.left = null;
        this.right = null;
    }
    return MyNode;
}());
var BST = (function () {
    function BST() {
        this.root = null;
        this.size = 0;
    }
    return BST;
}());

