/*
Time: O(n)
Space: O(n)
 */
function solution(nums: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    const current = nums[i];
    map.set(current, i);
  }
  for (let i = 0; i < nums.length; i += 1) {
    const current = nums[i];
    const x = target - current;
    if (map.has(x) && map.get(x) !== i) {
      return [i, map.get(x)];
    }
  }
  return [];
}

/* Alternative
function solution() {
  const map = nums.reduce((acc, num, index) => {
    acc.set(num, index);
    return acc;
  }, new Map());
  for (let i = 0; i < nums.length; i += 1) {
    const current = nums[i];
    const x = target - current;
    if (map.get(x) && map.get(x) !== i) {
      return [i, map.get(x)];
    }
  }
  return [];
 */

export default solution;