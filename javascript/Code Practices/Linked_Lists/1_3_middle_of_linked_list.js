/*
 * 876. Middle of the Linked List
 * Given a non-empty, singly linked list with head node head, return a middle node of linked list.
 * If there are two middle nodes, return the second middle node.
 *
 */
class Node {
 /**
  * @param {Node|null} nextNode
  * @param {value} value
  */
  constructor(nextNode, value) {
    this.next = nextNode;
    this.value = value;
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function middleNode(head) {
  let fast = head;
  let slow = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

const TEST_LINKED_LIST = new Node(null, -1);
[1,2,3,4,5,6,7,8,9,10].reverse().map(el => TEST_LINKED_LIST.next = new Node(TEST_LINKED_LIST.next, el));
console.log('It should return 5', middleNode(TEST_LINKED_LIST).value === 5 ? 'PASS' : 'FAIL');
