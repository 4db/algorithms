/**
 * Time complexity O(1)
 * Space complexity O(n)
 */
class QueueInTwoStacks {
  firstStack = [];
  secondReverseStack = [];

  /**
   * Time complexity O(1)
   * @param {number} x
   */
  enqueue = (x) => {
    this.firstStack.push(x);
  }

  /**
   * Time complexity O(1) based Amortized analysis
   * worst time complexity O(n)
   * @return {number} | -1 + console error
   */
  dequeue = () => {
    if (this.secondReverseStack.length === 0) {
      if (this.firstStack.length === 0) {
        console.log('queue underflow');
        return -1;
      }

      while(this.firstStack.length) {
        this.secondReverseStack.push(this.firstStack.pop());
      }
    }
    return this.secondReverseStack.pop();
  }
};

const q = new QueueInTwoStacks();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
console.log(q.dequeue()); // 1
console.log(q.dequeue()); // 2
console.log(q.dequeue()); // 3
console.log(q.dequeue()); // 4
console.log(q.dequeue()); // 5
console.log(q.dequeue()); // -1 console.log('Queue underflow') - queue is empty
