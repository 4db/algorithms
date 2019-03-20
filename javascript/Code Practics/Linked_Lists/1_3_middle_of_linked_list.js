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
var middleNode = function(head) {
    var fast = head;
    var slow = head;
    while(fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow
};
