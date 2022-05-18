// NOTE: 문제 링크 = https://leetcode.com/problems/longest-continuous-increasing-subsequence/submissions/

function solution(nums) {
  const length = nums.length;
  if (length === 1) {
    return 1;
  }
  let max = 0;
  let count = 1;
  for (let i = 1; i < length; i += 1) {
    if (nums[i - 1] < nums[i]) {
      count += 1;
    } else {
      max = Math.max(max, count);
      count = 1;
    }
    if (i + 1 === length) {
      max = Math.max(max, count);
    }
  }
  return max;
}

// 테스트 케이스
console.log(solution([1,3,5,4,7])); // 3
console.log(solution([2,2,2,2,2])); // 1
console.log(solution([1,3,5,4,2,3,4,5])); // 4
// node ./src/solutions/674/solution.js