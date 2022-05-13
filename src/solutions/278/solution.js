// NOTE: 문제 링크 = https://leetcode.com/problems/first-bad-version/
// 2022-05-12: failed - 2진탐색
const isBadVersion = (n) => {
  console.log(`call isBadVersion(${n}) `);
  if (n >= 4) {
    return true;
  }
  return false;
}

function solution(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    const versions = Array.from({ length: n }, () => 0);
    let index = Math.floor(n / 2);
    const map = new Map();
    while (index < n && index > 0) {
      if (!map.has(index)) {
        map.set(index, isBadVersion(index));
      }
      const isBad = map.get(index);
      if (isBad) {
        index = index - Math.floor((n - index) / 2);
      } else {
        index = index + Math.floor((n - index) / 2);
      }
      console.log(map);
    }
  };
}

// 테스트 케이스
console.log(solution(isBadVersion)(5));
//console.log(solution());
// console.log(solution());
