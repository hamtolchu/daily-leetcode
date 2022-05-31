// NOTE: 문제 링크 = https://leetcode.com/problems/excel-sheet-column-number/

// A = 65 -> 1
// Z = 90 -> 26
function solution(columnTitle) {

}

// 테스트 케이스
console.log(solution("A")); // 1
console.log(solution("Z")); // 26
console.log(solution("AA")); // 27 = 1 + (1 * 26)
console.log(solution("AB")); // 28 = 2 + (1 * 26)
console.log(solution("ZY")); // 701 = 25 + (26 * 26)
