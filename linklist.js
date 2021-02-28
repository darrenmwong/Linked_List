class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = this.prev ? this.prev : null
    }

}

class LinkedList {
    constructor(head = null) {
        this.head = null
        this.tail = null
    }
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);

node1.next = node2;

let nodeListArray = ["apple", "banana", "carrot", "cabbage", "watermelon"];

nodeListArray.map(item => { 
    new ListNode(item);
});




