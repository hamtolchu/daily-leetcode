// NOTE: 문제 링크 = https://leetcode.com/problems/robot-return-to-origin/
/* V2
function getMatchedCount(s, regex) {
  return [...s.matchAll(regex)].length;
}

function solution(moves) {
  const length = moves.length;
  const isOdd = length % 2 !== 0;
  if (isOdd) {
    return false;
  }
  return (getMatchedCount(moves, /L/g) === getMatchedCount(moves, /R/g))
    && (getMatchedCount(moves, /U/g) === getMatchedCount(moves, /D/g))
}
*/
function solution(moves) {
  const length = moves.length;
  const isOdd = length % 2 !== 0;
  if (isOdd) {
    return false;
  }
  const moveCount = moves.split("").reduce((acc, move) => {
    if (!acc[move]) {
      acc[move] = 0;
    }
    acc[move] += 1;
    return acc;
  }, {});
  return moveCount["L"] === moveCount["R"]
   && moveCount["U"] === moveCount["D"];
}

// 테스트 케이스
console.log(solution("UD")); // true
console.log(solution("LL")); // false
// console.log(solution());
