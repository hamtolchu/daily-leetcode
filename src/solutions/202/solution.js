// NOTE: 문제 링크 = https://leetcode.com/problems/happy-number/

function solution(n) {
  const map = new Map();
  map.set(n, true);
  let temp = n;
  while (temp !== 1) {
    if (temp > 10) {
      temp = String(temp)
        .split("")
        .filter((item) => item !== "0")
        .map((item) => parseInt(item))
        .reduce((acc, item) => {
          acc += Math.pow(item, 2);
          return acc;
        }, 0);
    } else {
      temp = Math.pow(temp, 2);
    }
    if (map.get(temp)) {
      return false;
    }
    map.set(temp, true);
  }
  return true;
}

// 테스트 케이스
console.log(solution(19)); // true
console.log(solution(2)); // false
// console.log(solution());
