// Time: O(n^2)
// Space: O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function solution(nums: number[], target: number): number[] {
  const data = nums.map((num, index) => ({
    num,
    index
  }));
  const result = [0];
  let i = 0;
  while (result.length < 2) {
    const { num } = data[i];
    for (let j = i + 1; j < data.length; j += 1) {
      const current = data[j];
      const sum = num + current.num;
      if (sum === target) {
        result.push(j);
        break;
      }
    }
    if (result.length === 1) {
      result.pop();
      i += 1;
      result.push(i);
    }
  }
  return result;
}

export default solution;