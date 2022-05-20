// NOTE: 문제 링크 = https://leetcode.com/problems/rotate-string/

function solution(s, goal) {
  const length = s.length;

  for (let i = 0; i < length; i += 1) {
    const lStr = s.slice(0, i);
    const rStr = s.slice(i, length);
    if (`${rStr}${lStr}` === goal) {
      return true;
    }
  }

  return false;
}

// 테스트 케이스
console.log(solution("abcde", "cdeab")); // true
// console.log(solution());
// console.log(solution());
