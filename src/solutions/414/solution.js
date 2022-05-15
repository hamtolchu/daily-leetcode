// NOTE: 문제 링크 = https://leetcode.com/problems/third-maximum-number/

function solution(nums) {
  const uniqueOrderedNums = Array
    .from(new Set(nums))
    .sort((a, b) => b - a);
  return (uniqueOrderedNums[2] === undefined) ? uniqueOrderedNums[0] : uniqueOrderedNums[2];
}

// 테스트 케이스
console.log(solution([3,2,1])); // 1
console.log(solution([1,2])); // 2
console.log(solution([2,2,3,1])); // 2

// node ./src/solutions/414/solution.js