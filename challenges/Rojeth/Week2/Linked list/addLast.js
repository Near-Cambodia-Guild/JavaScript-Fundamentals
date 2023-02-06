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
    addLast(node) {
        if (this.head === null){
        this.head = node;
        } else {
            let n = this.head;
            while(n.next!== null) {
                n = n.next;
            }
            n.next = node;
        }
        
    }
}

module.exports = LinkedList;