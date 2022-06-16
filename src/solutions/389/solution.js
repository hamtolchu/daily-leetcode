// NOTE: 문제 링크 = https://leetcode.com/problems/find-the-difference/

function arrayToMap(arr) {
  const m = new Map();
  for (const key of arr) {
    if (!m.has(key)) {
      m.set(key, 0);
    }
    m.set(key, m.get(key) + 1);
  }
  return m;
}

function solution(s, t) {
  const sm = arrayToMap(s);
  const tm = arrayToMap(t);
  const result = [];
  for (const key of tm.keys()) {
    if (tm.get(key) - (sm.get(key) || 0) !== 0) {
      result.push(key);
    }
  }
  return result.join("");
}

// 테스트 케이스
console.log(solution("abcd", "abcde")); // e
console.log(solution("", "y")); // y
// console.log(solution());
// node ./src/solutions/389/solution.js