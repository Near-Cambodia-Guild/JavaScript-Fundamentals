class LinkedList {
    constructor() {
        this.head = null;
    }
    addFirst(node) {
        if (this.head === null) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }
}

module.exports = LinkedList;