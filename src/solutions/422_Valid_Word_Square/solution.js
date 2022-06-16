// NOTE: 문제 링크 = https://leetcode.com/problems/valid-word-square/

function solution(words) {
  const rows = words.length;
  const cols = Math.max(
    ...words.map((word) => {
      return word.length;
    })
  );
  const matrix = Array.from(
    { length: rows },
    (re, ri) => {
      const word = words[ri];
      return Array.from(
        { length: cols },
        (ce, ci) => {
          return word[ci] || "";
        }
      );
    }
  );

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      try {
        if (matrix[i][j] !== matrix[j][i]) {
          return false;
        }
      } catch (error) {
        return false;
      }
    }
  }
  return true;
}

// 테스트 케이스
// console.log(solution(["abcd","bnrt","crmy","dtye"])); // true
// console.log(solution(["abcd","bnrt","crm","dt"])); // true
// console.log(solution(["ball","area","read","lady"])); // false
console.log(solution(["abc","b"])); // false
// node ./src/solutions/422_Valid_Word_Square/solution.js