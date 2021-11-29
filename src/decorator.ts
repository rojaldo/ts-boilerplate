class MyNode<T> {
    constructor(public value: T, public next: MyNode<T> = null, public prev: MyNode<T> = null) { }

    toString(): string {
        return `${this.value}`;
    }
}

class LinkedList<T> {
    constructor(public head: MyNode<T> = null, public tail: MyNode<T> = null) { }

    add(value: T): void {
        const node = new MyNode(value);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }

    toString(): string {
        let result = '';
        let current = this.head;
        while (current) {
            result += `${current.toString()} -> `;
            current = current.next;
        }
        return result;
    }
}

const list = new LinkedList<any>();
list.add(1);
list.add('2');
list.add(true);
console.log(list.toString());
