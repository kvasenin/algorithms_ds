function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

function reverseList(head, prev = null) {
    if (!head){
        return prev;
    }
    let next = head.next;
    head.next = prev;
    return reverseList(next, head);
};

function printList(head) {
    let current = head;
    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
}

const reversedList = reverseList(head);
printList(reversedList);