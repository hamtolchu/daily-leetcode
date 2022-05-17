// NOTE: 문제 링크 = https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

function solution(num) {
  let count = 0;
  while (num !== 0) {
    const isEven = num % 2 === 0;
    if (isEven) {
      num = num / 2;
    } else {
      num -= 1;
    }
    count += 1;
  }
  return count;
}

// 테스트 케이스
console.log(solution(14)); // 6
console.log(solution(8)); // 4
console.log(solution(123)); // 12
// node ./src/solutions/1342/solution.js