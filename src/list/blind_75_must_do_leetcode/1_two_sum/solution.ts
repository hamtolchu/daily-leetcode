// Time: O(n)
// Space: O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function solution(nums: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    const current = nums[i];
    const x = target - current;
    if (map.has(x)) {
      return [map.get(x), i];
    }
    map.set(current, i);
  }
  return [];
}

export default solution;