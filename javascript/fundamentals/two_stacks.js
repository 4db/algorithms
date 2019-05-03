/**
 * Implement two stacks in one array A [1 . . n]
 * in such a way that neither stack overflows unless
 * the total number of elements in both stacks together is n.
 * The PUSH and POP operations should run in O(1) time.
 * @param n
 */
function getTwoStack(n) {
  const arr = new Array(n);
  let top1 = -1;
  let top2 = n;

  this.push1 = (v) => {
    if (top1 < top2 - 1) {
      top1++;
      arr[top1] = v;
    }
    else {
      console.log('Stack overflow');
    }
  }
  this.push2 = (v) => {
    if (top1 < top2 - 1) {
      top2--;
      arr[top2] = v;
    }
    else {
      console.log('Stack overflow');
    }
  }
  this.pop1 = () => {
    if (top1 >= 0) {
      const response = arr[top1];
      top1--;
      return response;
    }
    else {
      console.log('Stack Underflow');
    }
  }
  this.pop2 = () => {
    if (top2 < size) {
      const response = arr[top2];
      top2--;
      return response;
    }
    else {
      console.log('Stack Underflow');
    }
  }
  return this;
}
