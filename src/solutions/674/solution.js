// NOTE: 문제 링크 = https://leetcode.com/problems/longest-continuous-increasing-subsequence/submissions/

function solution(nums) {
  let max = 0;
  let res = 0;
  let prev = null;
  for (const num of nums) {
    if (prev === null) {
      prev = num;
      res += 1;
      continue;
    }
    if (prev < num) {
      prev = num;
      res += 1;
    } else {
      max = Math.max(max, res);
      res = 1;
      prev = num;
    }
  }
  return Math.max(max, res);
}

// 테스트 케이스
console.log(solution([1,3,5,4,7])); // 3
console.log(solution([2,2,2,2,2])); // 1
console.log(solution([1,3,5,4,2,3,4,5])); // 4
// node ./src/solutions/674/solution.js