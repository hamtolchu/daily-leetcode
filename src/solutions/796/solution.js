// NOTE: 문제 링크 = https://leetcode.com/problems/rotate-string/

function solution(s, goal) {
  if (s === goal) {
    return true;
  }
  // Loop
  const length = s.length;

  for (let i = 0; i < length - 1; i += 1) {
    console.log(`DEBUG : ${s.slice(0, i + 1)} :: ${s.slice(i + 1, length)}`);
    if (`${s.slice(0, i + 1)}${s.slice(i + 1, length)}` === goal) {
      return true;
    }
  }

  return false;
}

// 테스트 케이스
console.log(solution("abcde", "cdeab")); // true
// console.log(solution());
// console.log(solution());
