// NOTE: 문제 링크 = https://leetcode.com/problems/add-strings/submissions/

function numToInteger(num) {
  const parsedNum = parseInt(num);
  if (isNaN(parsedNum)) {
    return 0;
  }
  return parsedNum;
}

function solution(num1, num2) {
  num1 = num1.split("").reverse();
  num2 = num2.split("").reverse();
  const num1Length = num1.length;
  const num2Length = num2.length;
  let result = [];
  for (let i = 0, len = num1Length > num2Length ? num1Length : num2Length; i < len; i += 1) {
    const a = numToInteger(num1[i]);
    const b = numToInteger(num2[i]);
    const c = numToInteger(result[i]);
    const sum = a + b + c;
    const remain = sum % 10;
    const isUpToTen = Math.floor(sum / 10) !== 0;
    result[i] = remain;
    if (isUpToTen) {
      result[i + 1] = 1;
    }
  }
  return result.reverse().join("");
}

// 테스트 케이스
console.log(solution("11", "123"));
console.log(solution("456", "77"));
console.log(solution("0", "0"));
// node src/solutions/415/solution.js