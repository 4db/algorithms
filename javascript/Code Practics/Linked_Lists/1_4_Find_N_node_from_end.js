function Node(n, v) {
  this.next = n;
    this.value = v;
}

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
