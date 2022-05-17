// NOTE: 문제 링크 = https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/

function solution(n) {
  let a = 1;
  while (a < n) {
    const b = n - a;
    if (
      !String(a).includes('0')
      && !String(b).includes('0')
    ) {
      return [a,b];
    }
    a += 1;
  }
  return [];
}

// 테스트 케이스
console.log(solution(2)); // [1,1]
console.log(solution(11)); // [2, 9]
// console.log(solution());
// node ./src/solutions/1317/solution.js