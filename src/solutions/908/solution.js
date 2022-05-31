// NOTE: 문제 링크 = https://leetcode.com/problems/smallest-range-i/

function solution(nums, k) {
  nums = nums.sort((a, b) => a - b);
  const min = nums[0] + k;
  const max = nums[nums.length - 1] - k;
  const diff = max - min;
  return diff < 0 ? 0 : diff;
}

// 테스트 케이스
// console.log(solution([1], 0)); // 0
console.log(solution([0,10], 2)); // 6
console.log(solution([1,3,6], 3)); // 3