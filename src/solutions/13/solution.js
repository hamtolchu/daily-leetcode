// NOTE: 문제 링크 = https://leetcode.com/problems/roman-to-integer/

const ROMAN = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

function solution(s) {
  let l = 0, r = 1;
  const res = [];
  while (l < s.length) {
    const left = s[l];
    const right = s[r];
    if (ROMAN[`${left}${right}`]) {
      res.push(ROMAN[`${left}${right}`]);
      l = r + 1;
      r = l + 1;
      continue;
    }
    res.push(ROMAN[left]);
    l += 1;
    r += 1;
  }
  return res.reduce((sum, n) => {
    sum += n;
    return sum;
  }, 0);
}

// 테스트 케이스
console.log(solution("III")); // 3
console.log(solution("LVIII")); // 58
console.log(solution("MCMXCIV")); // 1994
// node ./src/solutions/13/solution.js