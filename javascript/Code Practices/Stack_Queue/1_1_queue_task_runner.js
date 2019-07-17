// Implement task runner with max concurrency(run operations) limit

class Runner {
  constructor(concurrent) {
    this.tasks = {
      queue : [],
      max : concurrent,
      runCount : 0,
    };
  }

  push(task) {
    this.tasks.queue.push(task);
    if (this.tasks.runCount < this.tasks.max) {
      const _callbackDone = () => {
        this.tasks.runCount--;
        if (this.tasks.runCount < this.tasks.max
            && this.tasks.queue.length > 0) {
          const runTask = this.tasks.queue.shift();
          runTask(_callbackDone);
        }
      }

      this.tasks.runCount++;
      const runTask = this.tasks.queue.shift();
      runTask(_callbackDone);
    }
  }
}

console.log('It should execute: Task 1 STARTED -> Task 2 STARTED -> Task 3 STARTED -> Task 1..3 FINISHED -> Task 4..6 STARTED and etc');
function testSimpleTask(name) {
  //Return Simple Task function
  return (callbackDone) => {
    console.log(`${name} STARTED`);
    setTimeout(() => {
      console.log(`${name} FINISHED`);
      callbackDone();
    }, Math.random() * 1000);
  }
}
const runner = new Runner(3);
runner.push(testSimpleTask('Task 1'));   // run
runner.push(testSimpleTask('Task 2'));   // run
runner.push(testSimpleTask('Task 3'));   // run
runner.push(testSimpleTask('Task 4'));   // wait
runner.push(testSimpleTask('Task 5'));   // wait
runner.push(testSimpleTask('Task 6'));   // wait
