var MyNode = /** @class */ (function () {
    function MyNode(value, next, prev) {
        if (next === void 0) { next = null; }
        if (prev === void 0) { prev = null; }
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
    MyNode.prototype.toString = function () {
        return "".concat(this.value);
    };
    return MyNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(head, tail) {
        if (head === void 0) { head = null; }
        if (tail === void 0) { tail = null; }
        this.head = head;
        this.tail = tail;
    }
    LinkedList.prototype.add = function (value) {
        var node = new MyNode(value);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    };
    LinkedList.prototype.toString = function () {
        var result = '';
        var current = this.head;
        while (current) {
            result += "".concat(current.toString(), " -> ");
            current = current.next;
        }
        return result;
    };
    return LinkedList;
}());
var list = new LinkedList();
list.add(1);
list.add('2');
list.add(true);
console.log(list.toString());
