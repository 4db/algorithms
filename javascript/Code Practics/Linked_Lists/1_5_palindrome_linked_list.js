/**
 * 234. Palindrome Linked List
 *
 * Definition for singly-linked list.
 * 
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * @param {ListNode} head
 * @return {boolean}
 */
isPalindrome(head) {
  if (head === null || head.next === null) {
    return true;
  }

  let walker = head;
  let runner = head;
  let pre = null;
  while(runner !== null && runner.next !== null) {
    //move runner first, otherwise the next of the head will be already changed
    runner = runner.next.next;
    //reverse linked list
    nextWalker = walker.next;
    walker.next = pre;
    pre = walker;
    walker = nextWalker;
  }

  // after this the pre would be the head of our first half, while walker at the head of second half
  // odd number length
  if (runner != null) {
    walker = walker.next;
  }
  while (pre !== null && walker !== null) {
    if(pre.val != walker.val) {
      return false;
    }
    pre = pre.next;
    walker = walker.next;
  }
  return true;
}
