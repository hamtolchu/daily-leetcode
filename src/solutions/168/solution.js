// NOTE: 문제 링크 = https://leetcode.com/problems/excel-sheet-column-title/

// A - 65
// Z - 90
function solution(columnNumber) {
  const res = [];
  const table = Array
    .from(
      { length: 26 },
      (e, i) => String.fromCharCode(i + 65)
    );

  while (columnNumber > 0) {
    const charCode = ((columnNumber % 26) || 26) - 1;
    res.push(table[charCode]);
    columnNumber = Math.floor((columnNumber - charCode) / 26);
  }
  return res.reverse().join("");

  /*
  let result = "";

  while (columnNumber > 0) {
    const letter = columnNumber % 26 || 26;
    console.log(`columnNumber = ${columnNumber} / letter = ${letter}`);
    result = String.fromCharCode(64 + letter) + result;
    columnNumber = (columnNumber - letter) / 26;
  }
  return result;

   */
}

// 테스트 케이스
console.log(solution(1)); // A
console.log(solution(26)); // Z

console.log(solution(27)); // AA
console.log(solution(28)); // AB
console.log(solution(52)); // AZ
// console.log(solution(701)); // ZY


// node ./src/solutions/168/solution.js