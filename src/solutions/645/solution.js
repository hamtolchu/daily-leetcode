// NOTE: 문제 링크 = https://leetcode.com/problems/set-mismatch/

function solution(nums) {
  nums = nums.sort((a, b) => a - b);
  const length = nums.length;
  const arr = Array.from({ length }, (e, i) => {
    return i + 1;
  });

  for (let i = 0; i < length; i += 1) {
    if (arr[i] === nums[i]) {}

  }

}

// 테스트 케이스
// console.log(solution([1,2,2,4])); // [2,3]
// console.log(solution([1,1])); // [1,2]
console.log(solution([2,2])); // [2,1]
// console.log(solution([3,2,2])); // [2, 1]
// console.log(solution([3,2,3,4,6,5])); // [3,1]
console.log(solution([1,5,3,2,2,7,6,4,8,9])); // [2,10]
1,2, 2,3,4,5,6,7,8,9
//  node ./src/solutions/645/solution.js