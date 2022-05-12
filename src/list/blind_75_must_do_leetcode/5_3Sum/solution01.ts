/*
데이터셋
https://leetcode.com/submissions/detail/687985095/testcase/

Time Limit Exceeded

현재 작성한 코드의 시간복잡도는 O(n^3)
 */
//
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function solution(nums: number[]): number[][] {
  const set = new Set();
  for (let i = 0; i < nums.length - 2; i += 1) {
    for (let j = i + 1; j < nums.length - 1; j += 1) {
      for (let k = j + 1; k < nums.length; k += 1) {
        const value = nums[i] + nums[j] + nums[k];
        if (value === 0) {
          const orderedValues = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          set.add(orderedValues.join('/'));
        }
      }
    }
  }
  if (set.size === 0) {
    return [];
  }
  return Array.from(set).map((item) => {
    return (item as string).split("/").map((value) => parseInt(value));
  });
}

export default solution;