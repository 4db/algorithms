/**
 * 70. Climbing Stairs
 * You are climbing a stair case. It takes n steps to reach to the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 * Is a fibonacci number, with the starting numbers as 1 and 2, instead of 1 and 1.
 *
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  if (n <= 2) {
    return n <= 0 ? 0 : n;
  }

  let one_step_before = 2;
  let two_steps_before = 1;
  let all_ways = 0;

  for (let i = 2; i < n; i++) {
    all_ways = one_step_before + two_steps_before;
    two_steps_before = one_step_before;
    one_step_before = all_ways;
  }
  return all_ways;
}

console.log('It should return 2', climbStairs(2) === 2);
console.log('It should return 3', climbStairs(3) === 3);
