/**
 * 234. Palindrome Linked List
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head) {
  if (head === null || head.next === null) {
    return true;
  }
  let walker = head;
  let runner = head;
  let pre = null;
  while(runner !== null && runner.next !== null) {
    // move runner first, otherwise the next of the head will be already changed
    runner = runner.next.next;
    // reverse linked list
    nextWalker = walker.next;
    walker.next = pre;
    pre = walker;
    walker = nextWalker;
  }

  // after this the pre would be the head of our first half, 
  // while walker at the head of second half odd number length
  if (runner != null) {
    walker = walker.next;
  }
  while (pre !== null && walker !== null) {
    if (pre.val !== walker.val) {
      return false;
    }
    pre = pre.next;
    walker = walker.next;
  }
  return true;
}

/*
 * @param {Node|null} nextNode
 * @param {val} val
 */
function Node(nextNode, val) {
  this.next = nextNode;
  this.val = val;
}

const TEST_LINKED_LIST_PALINDROME = new Node(null, 1);
[2,3,3,2,1].reverse().map(el => TEST_LINKED_LIST_PALINDROME.next = new Node(TEST_LINKED_LIST_PALINDROME.next, el));
console.log('It should return true', isPalindrome(TEST_LINKED_LIST_PALINDROME) === true ? 'PASS' : 'FAIL');

const TEST_LINKED_LIST_NOT_PALINDROME = new Node(null, 1);
[2,3,4,5,6,7].reverse().map(el => TEST_LINKED_LIST_NOT_PALINDROME.next = new Node(TEST_LINKED_LIST_NOT_PALINDROME.next, el));
console.log('It should return false', isPalindrome(TEST_LINKED_LIST_NOT_PALINDROME) === false ? 'PASS' : 'FAIL');
