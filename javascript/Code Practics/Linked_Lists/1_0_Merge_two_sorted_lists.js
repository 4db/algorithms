/**
 * Merge two sorted linked lists and return it as a
 * new list. The new list should be made by splicing
 * together the nodes of the first two lists.
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */

/**
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
