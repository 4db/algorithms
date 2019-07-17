/**
 * 83. Remove Duplicates from Sorted List
 * Given a sorted linked list,
 * delete all duplicates such that each element appear only once.
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
  let current = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
}

class Node {
  /*
   * @param {Node|null} nextNode
   * @param {val} val
   */
  constructor(nextNode, val) {
    this.next = nextNode;
    this.val = val;
  }
}

const TEST_LINKED_LIST = new Node(null, 1);
[1,1,1,1,2].reverse().map(el => TEST_LINKED_LIST.next = new Node(TEST_LINKED_LIST.next, el));
console.log('It should return next 2', deleteDuplicates(TEST_LINKED_LIST).next.val === 2 ? 'PASS' : 'FAIL');

const TEST_LINKED_LIST_2 = new Node(null, 3);
[3,3,4].reverse().map(el => TEST_LINKED_LIST_2.next = new Node(TEST_LINKED_LIST_2.next, el));
console.log('It should return next 3', deleteDuplicates(TEST_LINKED_LIST_2).val === 3 ? 'PASS' : 'FAIL');
