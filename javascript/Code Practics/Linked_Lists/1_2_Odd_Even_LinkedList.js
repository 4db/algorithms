/**
* 328. Odd Even Linked List
* You should try to do it in place. The program should run in O(1)
* space complexity and O(nodes) time complexity.
*
* Definition for singly-linked list.
* function ListNode(val) {
*  this.val = val;
*  this.next = null;
* }
*/
/**
* @param {ListNode} head
* @return {ListNode}
*/
function oddEvenList(head) {
 if (head === null) {
    return null;
  }
  var odd = head;
  var even = head.next;
  var evenHead = even;
  while (even != null && even.next != null) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
};
