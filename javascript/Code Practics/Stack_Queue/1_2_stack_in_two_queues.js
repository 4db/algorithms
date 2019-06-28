
/**https://github.com/4db/algorithms
 * Time complexity O(1)
 * Space complexity O(n)
 */
class StackInTwoQueues {
  firstQueue = [];
  secondReverseQueue = [];

  /**
   * Time complexity O(1)
   * @param {number} x
   */
  push = (x) => {
    // Simulate enqueue
    this.firstQueue.push(x);
  }

  /**
   * Time complexity O(1) based Amortized analysis
   * worst time complexity O(n)
   * @return {number} | -1 + console error
   */
  pop = () => {
    if (this.secondReverseQueue.length === 0) {
      if (this.firstQueue.length === 0) {
        console.log('Stack underflow');
        return -1;
      }

      while(this.firstQueue.length) {
        //shift() => dequeue
        this.secondReverseQueue.push(this.firstQueue.shift());
      }
    }
    // shift() => dequeue
    console.log('this.secondReverseQueue <<<', this.secondReverseQueue);
    return this.secondReverseQueue.shift();
  }
};

const stack = new StackInTwoQueues();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.pop()); // 5

console.log(stack.pop()); // 4
console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
console.log(stack.pop()); // -1 console.log('Stack underflow') - stack is empty
