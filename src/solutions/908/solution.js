// NOTE: 문제 링크 = https://leetcode.com/problems/smallest-range-i/

function solution(nums, k) {
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  max = max - k;
  min = min + k;
  const diff = max - min;
  return diff < 0 ? 0 : diff;
}

// 테스트 케이스
// console.log(solution([1], 0)); // 0
console.log(solution([0,10], 2)); // 6
console.log(solution([1,3,6], 3)); // 3