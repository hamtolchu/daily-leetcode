// NOTE: 문제 링크 = https://leetcode.com/problems/find-pivot-index/

function solution(nums) {
  const length = nums.length;
  const sum = nums.reduce((sum, num) => sum += num, 0);
  let leftSum = 0;
  for (let i = 0; i < length; i += 1) {
    const num = nums[i];
    leftSum += (nums[i - 1] || 0);
    const targetSum = sum - num;
    if (targetSum - leftSum === leftSum) {
      return i;
    }
  }
  return -1;
}

// 테스트 케이스
console.log(solution([1,7,3,6,5,6])); // 3
console.log(solution([1,2,3])); // -1
console.log(solution([2,1,-1])); // 0
// node ./src/solutions/724/solution.js
