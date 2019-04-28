/*
 * @param {Node|null} nextNode
 * @param {value} value
 */
function Node(nextNode, value) {
  this.next = nextNode;
  this.value = value;
}

/*
 * Function find a N node from the end of Linked List
 * Time Complexity O(N2) -> O(N)
 * Space Complexity O(1)
 *
 * @param {Node} frontNode
 * @param {number} target
 * @return {number|string}
 */
function getNElValue(frontNode, target) {
  if (target < 1) {
    return -1;
  }

  let count = 1;
  let current = frontNode.next;
  let out = null

  while (current.next) {
    if (count === target) {
      out = frontNode.next;
    }
    current = current.next;
    count++;

    if (out !== null) {
      out = out.next;
    }
  }
  
  return out === null ? -1 : out.value;  
}

const TEST_LINKED_LIST = new Node(null, -1);
[1,2,3,4,5,6,7,8,9,10].reverse().map(el => TEST_LINKED_LIST.next = new Node(TEST_LINKED_LIST.next, el));

console.log('It should return 8', getNElValue(TEST_LINKED_LIST, 3) === 8 ? 'PASS' : 'FAIL');
console.log('It should return 2', getNElValue(TEST_LINKED_LIST, 9) === 2 ? 'PASS' : 'FAIL');
console.log('It should return -1', getNElValue(TEST_LINKED_LIST, 99) === -1 ? 'PASS' : 'FAIL');
console.log('It should return -1', getNElValue(TEST_LINKED_LIST, -1) === -1 ? 'PASS' : 'FAIL');
