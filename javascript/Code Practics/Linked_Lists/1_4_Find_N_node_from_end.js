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
  let count = 1;
  let current = frontNode.next;

  while (current.next) {
  current = current.next;
    count++;
  }

  current = frontNode.next;
  while (current.next) {
    if (count === target) {
      return current.value;
    }
  current = current.next;
    count--;
  }
  return -1;  
}

const linkedList = new Node(null, -1);
[1,2,3,4,5,6,7,8,9,10].reverse().map(el => linkedList.next = new Node(linkedList.next, el));
console.log('It should return 8', getNElValue(linkedList, 3) === 8 ? 'PASS' : 'FAIL');
console.log('It should return 2', getNElValue(linkedList, 9) === 2 ? 'PASS' : 'FAIL');
console.log('It should return -1', getNElValue(linkedList, 99) === -1 ? 'PASS' : 'FAIL');
