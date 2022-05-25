// NOTE: 문제 링크 = https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

function solution(nums) {
  nums.sort((a, b) => b - a);
  return (nums[0] - 1) * (nums[1] - 1);
}

// 테스트 케이스
console.log(solution([3,4,5,2])); // 12
console.log(solution([1,5,4,5])); // 16
console.log(solution([3,7])); // 12
