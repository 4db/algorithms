/**
 * Swap Nodes in Pairs
 * Given a linked list, swap every two adjacent nodes and return its head.
 * You may not modify the values in the list's nodes, only nodes
 * itself may be changed.
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function swapPairs(head) {
  const resHead = {val: -1, next: null};
  let runner = resHead;
  resHead.next = head;

  while (runner.next !== null && runner.next.next !== null) {
    runner = swap(runner, runner.next, runner.next.next);
  }
  return resHead.next;
}

/*
 * @param {ListNode} head
 * @param {ListNode} node1
 * @param {ListNode} node2
 * @return {listNode}
 */
function swap(head, node1, node2) {
  const tail = node2.next;
  head.next = node2;
  node2.next = node1;
  node1.next = tail;
  return node1;
}
