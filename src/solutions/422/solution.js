// NOTE: 문제 링크 = https://leetcode.com/problems/number-of-segments-in-a-string/

function solution(s) {
  return s.split(" ").filter((str) => str !== "").length;
}

// 테스트 케이스
console.log(solution("Hello, my name is John")); // 5
console.log(solution("Hello")); // 1
// console.log(solution());
//