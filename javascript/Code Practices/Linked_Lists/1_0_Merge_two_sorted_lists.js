/**
 * Merge two sorted linked lists and return it as a
 * new list. The new list should be made by splicing
 * together the nodes of the first two lists.
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
  let mergedLinkedListHead = {val: -1, next: null};
  let runner = mergedLinkedListHead;

  while (l1 && l2) {
    if (l1.val > l2.val) {
      runner.next = l2;
      l2 = l2.next;
    }
    else {
      runner.next = l1;
      l1 = l1.next;
    }
    runner = runner.next;
  }
  // For case if l1 already empty, but l2 is not
  runner.next = l1 || l2;
  return mergedLinkedListHead.next;
}

/*
 * @param {Node|null} nextNode
 * @param {value} value
 */
function Node(nextNode, value) {
  this.next = nextNode;
  this.value = value;
}

const TEST_LINKED_LIST_1 = new Node(null, -1);
[1,2,3,4,5].reverse().map(el => TEST_LINKED_LIST_1.next = new Node(TEST_LINKED_LIST_1.next, el));

const TEST_LINKED_LIST_2 = new Node(null, -1);
[6,7,8,9,10].reverse().map(el => TEST_LINKED_LIST_2.next = new Node(TEST_LINKED_LIST_2.next, el));

console.log('It should return merged linked list', conmergeTwoLists(TEST_LINKED_LIST_1, TEST_LINKED_LIST_2));
