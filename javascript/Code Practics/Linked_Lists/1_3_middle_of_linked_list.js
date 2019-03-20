/**
 * 876. Middle of the Linked List
 */
 
 /**
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
function middleNode(head) {
  let fast = head;
  let slow = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}

//console.log('It should return [3,4,5]', middleNode([1,2,3,4,5]) == [3,4,5] ? 'PASS' : 'FAIL');
